import { mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'projects');
mkdirSync(outDir, { recursive: true });

const projects = [
  ['jay-enterprise', 'Jay Enterprise', 'Multi-Vendor E-Commerce Platform'],
  ['flowboard', 'FlowBoard', 'Productivity Task Manager'],
  ['creatorhub', 'Creator Hub', 'Creator Platform'],
  ['acetest', 'AceTest', 'Computer-Based Testing Platform'],
  ['jenny-store', 'Jenny Store', 'Jewelry & Body Accessories'],
  ['evolve30', 'Evolve30', '30-Day Growth Challenge'],
  ['hgam', 'HGAM', 'Ministry Digital Platform'],
  ['fraudwatch', 'FraudWatch', 'Fraud Reporting Portal'],
  ['temu-clone', 'Temu Clone', 'E-Commerce UI Recreation'],
  ['terminal', 'Terminal Page', 'Front-End Project'],
  ['trust-app', 'Trust App Page', 'Front-End Project'],
  ['fabric-page', 'Fabric Store Page', 'Front-End Project'],
  ['layout-practice', 'Layout Explorations', 'Practice Project'],
];

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function svg(name, tagline, width = 1600, height = 900) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(name)} screenshot placeholder">
  <defs>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="#ffffff" stroke-opacity="0.045"/>
    </pattern>
    <linearGradient id="glow" x1="1" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#e5484d" stop-opacity="0.14"/>
      <stop offset="1" stop-color="#e5484d" stop-opacity="0.02"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="#121214"/>
  <rect width="${width}" height="${height}" fill="url(#grid)"/>
  <ellipse cx="${width * 0.82}" cy="${height * 0.18}" rx="340" ry="280" fill="url(#glow)"/>
  <rect x="${width * 0.8}" y="0" width="3" height="${height}" fill="#e5484d"/>
  <rect x="0" y="${height - 3}" width="${width}" height="3" fill="#e5484d" opacity="0.4"/>
  <text x="${width * 0.1}" y="${height * 0.44}" font-family="ui-monospace, Menlo, Consolas, monospace" font-size="30" fill="#e5484d" letter-spacing="4">
    &gt;_ PROJECT
  </text>
  <text x="${width * 0.1}" y="${height * 0.56}" font-family="Inter, system-ui, sans-serif" font-size="92" font-weight="700" fill="#fafafa">
    ${esc(name)}
  </text>
  <text x="${width * 0.1}" y="${height * 0.66}" font-family="Inter, system-ui, sans-serif" font-size="36" fill="#9b9ba3">
    ${esc(tagline)}
  </text>
  <text x="${width * 0.1}" y="${height * 0.82}" font-family="ui-monospace, Menlo, Consolas, monospace" font-size="20" fill="#5c5c66">
    screenshot placeholder — replace with a real capture
  </text>
</svg>
`;
}

for (const [slug, name, tagline] of projects) {
  writeFileSync(join(outDir, `${slug}.svg`), svg(name, tagline));
  console.log(`generated ${slug}.svg`);
}