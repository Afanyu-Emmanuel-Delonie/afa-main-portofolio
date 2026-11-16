import { useEffect } from 'react';

const BASE_URL = 'https://afanyu.netlify.app';
const OG_IMAGE = `${BASE_URL}/og-image.png`;
const AUTHOR = 'Afanyu Emmanuel';
const TWITTER_HANDLE = '@afanyu_dev';

export default function useSEO({
  title,
  description,
  url,
  image = OG_IMAGE,
  type = 'website',
  project = null, // pass full project object on /projects/:id pages
  design = null, // pass full case-study object on /design/:id pages
  noindex = false,
}) {
  useEffect(() => {
    const canonical = `${BASE_URL}${url}`;
    const dateModified = new Date().toISOString().split('T')[0];
    const absoluteImage = image.startsWith('http') ? image : `${BASE_URL}${image}`;

    document.title = title;

    const setMeta = (sel, attr, val) => {
      let el = document.querySelector(sel);
      if (!el) {
        el = document.createElement('meta');
        // parse attribute name and value from selector like meta[name="foo"] or meta[property="bar"]
        const match = sel.match(/\[([a-z:]+)="([^"]+)"\]/);
        if (match) el.setAttribute(match[1], match[2]);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, val);
    };

    // ── Primary ──────────────────────────────────────────────
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[name="author"]', 'content', AUTHOR);
    setMeta('meta[name="robots"]', 'content', noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // ── Canonical ────────────────────────────────────────────
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    link.href = canonical;

    // ── Open Graph ───────────────────────────────────────────
    setMeta('meta[property="og:type"]', 'content', type);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', canonical);
    setMeta('meta[property="og:image"]', 'content', absoluteImage);
    setMeta('meta[property="og:image:width"]', 'content', '1200');
    setMeta('meta[property="og:image:height"]', 'content', '630');
    setMeta('meta[property="og:image:alt"]', 'content', title);
    setMeta('meta[property="og:site_name"]', 'content', AUTHOR);
    setMeta('meta[property="og:locale"]', 'content', 'en_US');
    setMeta('meta[property="article:author"]', 'content', `${BASE_URL}/`);
    setMeta('meta[property="article:modified_time"]', 'content', dateModified);

    // ── Twitter Card ─────────────────────────────────────────
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMeta('meta[name="twitter:site"]', 'content', TWITTER_HANDLE);
    setMeta('meta[name="twitter:creator"]', 'content', TWITTER_HANDLE);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:url"]', 'content', canonical);
    setMeta('meta[name="twitter:image"]', 'content', absoluteImage);
    setMeta('meta[name="twitter:image:alt"]', 'content', title);

    // ── Dynamic JSON-LD (project pages only) ─────────────────
    const JSONLD_ID = 'dynamic-jsonld';
    let existing = document.getElementById(JSONLD_ID);
    if (existing) existing.remove();

    if (project) {
      const schemas = [
        // BreadcrumbList
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Projects', item: `${BASE_URL}/#projects` },
            { '@type': 'ListItem', position: 3, name: project.title, item: canonical },
          ],
        },
        // SoftwareApplication / CreativeWork per project
        {
          '@context': 'https://schema.org',
          '@type': project.category === 'UI/UX' ? 'CreativeWork' : 'SoftwareApplication',
          name: project.title,
          description: project.caseStudy.overview,
          url: project.live || canonical,
          applicationCategory: 'WebApplication',
          operatingSystem: 'Web',
          author: {
            '@type': 'Person',
            name: AUTHOR,
            url: `${BASE_URL}/`,
          },
          keywords: project.stack.join(', '),
          datePublished: '2024-01-01',
          dateModified,
          ...(project.github ? { codeRepository: project.github } : {}),
        },
      ];

      const script = document.createElement('script');
      script.id = JSONLD_ID;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schemas);
      document.head.appendChild(script);
    } else if (design) {
      const schemas = [
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Design', item: `${BASE_URL}/design` },
            { '@type': 'ListItem', position: 3, name: design.title, item: canonical },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: design.title,
          description: design.tagline,
          url: canonical,
          creator: {
            '@type': 'Person',
            name: AUTHOR,
            url: `${BASE_URL}/`,
          },
          keywords: design.tools?.join(', '),
          about: design.category,
          dateModified,
        },
      ];

      const script = document.createElement('script');
      script.id = JSONLD_ID;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schemas);
      document.head.appendChild(script);
    }

    return () => {
      const s = document.getElementById(JSONLD_ID);
      if (s) s.remove();
    };
  }, [title, description, url, image, type, project, design, noindex]);
}
