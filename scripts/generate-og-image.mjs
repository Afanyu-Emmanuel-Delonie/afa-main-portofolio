#!/usr/bin/env node
/**
 * One-off generator for public/og-image.png — not part of the build pipeline.
 * Composes a 1200x630 card (hero photo + name/title) matching the site's
 * brand tokens, and screenshots it with Puppeteer. Re-run manually whenever
 * the hero photo or positioning line changes: `node scripts/generate-og-image.mjs`.
 */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import puppeteer from 'puppeteer';

const heroImagePath = path.resolve(process.cwd(), 'src/assets/afa-1.png'); // actually a JPEG despite the extension
const outPath = path.resolve(process.cwd(), 'public/og-image.png');

const heroBase64 = (await readFile(heroImagePath)).toString('base64');
const heroDataUri = `data:image/jpeg;base64,${heroBase64}`;

const html = `
<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<style>
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Geist:wght@400;500&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 1200px; height: 630px; overflow: hidden; background: #18181B; }
  .card {
    position: relative;
    width: 1200px; height: 630px;
    background: #18181B;
    display: flex;
    align-items: center;
    font-family: 'Geist', sans-serif;
  }
  .glow {
    position: absolute; top: -120px; left: -80px;
    width: 420px; height: 420px; border-radius: 50%;
    background: rgba(245, 158, 11, 0.12); filter: blur(10px);
  }
  .text {
    position: relative; z-index: 2;
    width: 640px; padding-left: 72px;
  }
  .badge {
    display: inline-flex; align-items: center; gap: 8px;
    color: #F59E0B; font-size: 18px; font-weight: 500;
    margin-bottom: 20px;
  }
  .dot { width: 8px; height: 8px; border-radius: 50%; background: #F59E0B; }
  .name {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700; color: #FAFAFA;
    font-size: 58px; line-height: 1.08; margin-bottom: 18px;
  }
  .name span { color: #F59E0B; }
  .role {
    font-size: 28px; color: #D4D4D8; font-weight: 500; margin-bottom: 14px;
  }
  .loc {
    font-size: 20px; color: #A1A1AA;
  }
  .photo-wrap {
    position: absolute; right: 0; top: 0; width: 560px; height: 630px;
    overflow: hidden;
  }
  .photo-wrap img {
    width: 100%; height: 100%; object-fit: cover; object-position: center top;
    filter: grayscale(0.15);
  }
  .fade {
    position: absolute; inset: 0;
    background: linear-gradient(90deg, #18181B 0%, rgba(24,24,27,0.55) 28%, rgba(24,24,27,0) 55%);
  }
  .vfade {
    position: absolute; inset: 0;
    background: linear-gradient(0deg, rgba(24,24,27,0.35) 0%, rgba(24,24,27,0) 30%);
  }
</style>
</head>
<body>
  <div class="card">
    <div class="glow"></div>
    <div class="text">
      <div class="badge"><span class="dot"></span>OPEN TO WORK</div>
      <div class="name">Afanyu<br/><span>Emmanuel</span></div>
      <div class="role">Software Engineer &amp; UI/UX Designer</div>
      <div class="loc">Kigali, Rwanda</div>
    </div>
    <div class="photo-wrap">
      <img src="${heroDataUri}" />
      <div class="fade"></div>
      <div class="vfade"></div>
    </div>
  </div>
</body>
</html>
`;

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);
  const buffer = await page.screenshot({ type: 'png' });
  await writeFile(outPath, buffer);
  console.log(`[og-image] wrote ${outPath} (${(buffer.length / 1024).toFixed(0)} KB)`);
} finally {
  await browser.close();
}
