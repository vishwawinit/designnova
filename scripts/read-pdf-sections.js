const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const PDF_PATH = 'C:\\Users\\vishwa\\Downloads\\Frame 105.pdf';
const OUT_DIR  = path.join(__dirname, '../public/pdf-sections');

(async () => {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  const pdfBytes = fs.readFileSync(PDF_PATH);
  const dataUrl = `data:application/pdf;base64,${pdfBytes.toString('base64')}`;

  // Render PDF at 0.5× scale so full width fits in 1440px viewport
  // 2880 × 0.5 = 1440px wide, height = 11104 × 0.5 = 5552px
  const SCALE = 0.5;
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  await page.setContent(`<!DOCTYPE html>
<html><head><meta charset="utf-8"/>
<style>*{margin:0;padding:0;}body{background:#fff;overflow-x:hidden;}</style>
</head><body>
<canvas id="c"></canvas>
<script>
window.__renderPDF = async (dataUrl, scale) => {
  const s=document.createElement('script');
  s.src='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
  await new Promise(r=>{s.onload=r;document.head.appendChild(s);});
  pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  const pdf=await pdfjsLib.getDocument({url:dataUrl}).promise;
  const pg=await pdf.getPage(1);
  const vp=pg.getViewport({scale});
  const c=document.getElementById('c');
  c.width=vp.width; c.height=vp.height;
  c.style.display='block';
  document.body.style.height=vp.height+'px';
  await pg.render({canvasContext:c.getContext('2d'),viewport:vp}).promise;
  return {w:Math.round(vp.width),h:Math.round(vp.height)};
};
</script></body></html>`);

  await page.waitForTimeout(500);
  const dims = await page.evaluate(({du,sc})=>window.__renderPDF(du,sc),{du:dataUrl,sc:SCALE});
  console.log(`Rendered at ${SCALE}×: ${dims.w}×${dims.h}`);

  // Now screenshot the full page in vertical strips
  // Each strip = 900px viewport height
  const totalH = dims.h;
  const stripH = 900;
  let y = 0;
  let idx = 1;

  while (y < totalH) {
    await page.evaluate((scrollY)=>window.scrollTo(0, scrollY), y);
    await page.waitForTimeout(200);
    await page.screenshot({
      path: path.join(OUT_DIR, `strip-${String(idx).padStart(2,'0')}.png`),
    });
    console.log(`✓ strip-${idx} y=${y}`);
    y += stripH;
    idx++;
  }

  await browser.close();
  console.log('\nAll strips saved to public/pdf-sections/strip-*.png');
})();
