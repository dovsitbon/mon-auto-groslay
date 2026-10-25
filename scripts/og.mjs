// Génère public/og.png (1200x630) et public/apple-touch-icon.png (180x180). Usage : node scripts/og.mjs
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';

const font = (p) => `data:font/woff2;base64,${readFileSync(p).toString('base64')}`;
const sora = font('node_modules/@fontsource/sora/files/sora-latin-700-normal.woff2');
const pub = font('node_modules/@fontsource-variable/public-sans/files/public-sans-latin-wght-normal.woff2');
const css = `@font-face{font-family:S;src:url(${sora})}@font-face{font-family:P;src:url(${pub})}
*{margin:0;box-sizing:border-box}body{background:#efe6d6;color:#15233f;font-family:P}`;

const og = `<style>${css}
.w{width:1200px;height:630px;display:grid;grid-template-columns:1.35fr 1fr;align-items:center;padding:60px 70px;gap:50px}
h1{font-family:S;font-size:64px;line-height:1.05;letter-spacing:-.02em}
.p{display:inline-flex;border:3px solid #15233f;border-radius:5px;margin-bottom:34px;font-family:S;background:#fbf7ef}
.p b{background:#15233f;color:#fbf7ef;font-size:14px;padding:6px 8px;display:flex;align-items:center}
.p span{font-size:28px;letter-spacing:.06em;padding:8px 14px}
.s{margin-top:26px;font-size:26px}
.t{background:#fbf7ef;padding:40px 36px;transform:rotate(1.5deg);border:2px solid #cbbb9f}
.n{font-family:S;font-size:190px;line-height:.8;letter-spacing:-.06em}
.r{margin-top:18px;border-top:3px dashed #cbbb9f;padding-top:14px;display:flex;justify-content:space-between;font-size:26px}
</style><div class="w"><div><div class="p"><b>F<br>95</b><span>MON AUTO</span></div>
<h1>Voitures d'occasion contrôlées et préparées, à Groslay</h1><p class="s">37 route de Calais · 06 85 96 94 77</p></div>
<div class="t"><p style="font-size:22px;color:#4a5468">Note Google</p><p class="n">5,0</p><p class="r"><span style="color:#8a6210">★★★★★</span><b style="font-family:S">32 avis</b></p></div></div>`;

const icon = `<style>${css}body{width:180px;height:180px;background:#15233f;display:grid;place-items:center}
p{font-family:S;color:#efe6d6;font-size:104px;line-height:1;margin-top:-6px}</style><p>M</p>`;

const b = await chromium.launch();
const pg = await b.newPage({ viewport: { width: 1200, height: 630 } });
await pg.setContent(og); await pg.waitForTimeout(300);
await pg.screenshot({ path: 'public/og.png' });
await pg.setViewportSize({ width: 180, height: 180 });
await pg.setContent(icon); await pg.waitForTimeout(300);
await pg.screenshot({ path: 'public/apple-touch-icon.png' });
await b.close();
console.log('og.png et apple-touch-icon.png générés');
