#!/usr/bin/env node
/**
 * Build-time prerender step. Boots the production build behind `vite preview`,
 * crawls it with a real headless browser starting from "/", captures the fully
 * rendered HTML for every internal route it finds (so each page ships real
 * content + its own <title>/meta/OG/JSON-LD from useSEO, not the generic shell),
 * and writes each one to its own dist/<route>/index.html. Also emits dist/404.html
 * and a dist/sitemap.xml built from the same crawl, so both stay in sync with
 * whatever routes actually exist without needing a maintained route list.
 */
import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import puppeteer from 'puppeteer';

const PORT = 4198;
const BASE_URL = `http://localhost:${PORT}`;
const SITE_URL = 'https://afanyu.netlify.app';
const DIST = path.resolve(process.cwd(), 'dist');
const NOT_FOUND_PROBE = '/__prerender-404-probe__';

const VITE_BIN = path.resolve(process.cwd(), 'node_modules', 'vite', 'bin', 'vite.js');

function startPreviewServer() {
  // Invoke Vite's CLI entry directly via the same Node process (no shell/npx
  // wrapper) so `proc.kill()` actually terminates the server — spawning
  // through a shell on Windows only kills the cmd.exe wrapper, leaving the
  // real preview server orphaned on the port for subsequent runs.
  const proc = spawn(process.execPath, [VITE_BIN, 'preview', '--port', String(PORT), '--strictPort'], {
    cwd: process.cwd(),
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  return new Promise((resolve, reject) => {
    let settled = false;
    let output = '';
    // eslint-disable-next-line no-control-regex
    const stripAnsi = (s) => s.replace(/\x1b\[[0-9;]*m/g, '');
    const onData = (data) => {
      output += data.toString();
      if (!settled && /Local:/.test(stripAnsi(output))) {
        settled = true;
        resolve(proc);
      }
    };
    proc.stdout.on('data', onData);
    proc.stderr.on('data', onData);
    proc.on('error', (err) => { if (!settled) { settled = true; reject(err); } });
    proc.on('exit', (code) => {
      if (!settled) { settled = true; reject(new Error(`vite preview exited early (code ${code}): ${output}`)); }
    });
    setTimeout(() => {
      if (!settled) { settled = true; proc.kill(); reject(new Error(`vite preview did not start within 20s: ${output}`)); }
    }, 20000);
  }).then(
    (p) => p,
    (err) => { proc.kill(); throw err; },
  );
}

function routeToDistPath(route) {
  if (route === '/') return path.join(DIST, 'index.html');
  const clean = route.replace(/^\/+|\/+$/g, '');
  return path.join(DIST, clean, 'index.html');
}

function escapeXml(str = '') {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

async function capture(page, route) {
  await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
  await page.waitForSelector('main', { timeout: 15000 }).catch(() => {});
  // useSEO runs in a useEffect — give it a tick past paint before reading tags.
  await new Promise((resolve) => setTimeout(resolve, 150));

  const meta = await page.evaluate(() => ({
    title: document.title,
    ogImage: document.querySelector('meta[property="og:image"]')?.getAttribute('content') || null,
  }));
  const html = await page.content();
  return { route, html, ...meta };
}

async function crawl(page) {
  const visited = new Set();
  const queue = ['/'];
  const pages = [];

  while (queue.length) {
    const route = queue.shift();
    if (visited.has(route)) continue;
    visited.add(route);

    const result = await capture(page, route);
    pages.push(result);

    const links = await page.$$eval('a[href]', (as) => as.map((a) => a.getAttribute('href')).filter(Boolean));
    for (const href of links) {
      const isInternalPage =
        href.startsWith('/') &&
        !href.startsWith('//') &&
        !href.includes('#') &&
        !/\.[a-zA-Z0-9]+$/.test(href); // skip real files (cv.pdf, images, etc.) — only app routes get crawled
      if (isInternalPage && !visited.has(href) && !queue.includes(href)) queue.push(href);
    }
  }
  return pages;
}

function buildSitemap(pages) {
  const today = new Date().toISOString().split('T')[0];
  const entries = [...pages]
    .sort((a, b) => a.route.localeCompare(b.route))
    .map(({ route, title, ogImage }) => {
      const loc = `${SITE_URL}${route}`;
      const priority = route === '/' ? '1.0' : '0.8';
      const changefreq = route === '/' ? 'monthly' : 'yearly';
      const image = ogImage
        ? `\n    <image:image>\n      <image:loc>${escapeXml(ogImage)}</image:loc>\n      <image:title>${escapeXml(title)}</image:title>\n    </image:image>`
        : '';
      return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>${image}\n  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${entries}\n</urlset>\n`;
}

async function main() {
  console.log('[prerender] starting vite preview server...');
  const server = await startPreviewServer();
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });

  try {
    const page = await browser.newPage();

    console.log('[prerender] crawling from / ...');
    const pages = await crawl(page);
    console.log(`[prerender] captured ${pages.length} route(s): ${pages.map((p) => p.route).join(', ')}`);

    for (const { route, html } of pages) {
      const outPath = routeToDistPath(route);
      await mkdir(path.dirname(outPath), { recursive: true });
      await writeFile(outPath, html, 'utf-8');
    }

    console.log('[prerender] capturing 404 page...');
    const notFound = await capture(page, NOT_FOUND_PROBE);
    await writeFile(path.join(DIST, '404.html'), notFound.html, 'utf-8');

    console.log('[prerender] writing sitemap.xml...');
    await writeFile(path.join(DIST, 'sitemap.xml'), buildSitemap(pages), 'utf-8');

    console.log('[prerender] done.');
  } finally {
    await browser.close();
    server.kill();
  }
}

main().catch((err) => {
  console.error('[prerender] failed:', err);
  process.exit(1);
});
