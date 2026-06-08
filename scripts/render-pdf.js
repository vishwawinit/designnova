/**
 * Render Frame 105.pdf pages to PNG using PDF.js + Playwright
 */
const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const PDF_PATH = 'C:\\Users\\vishwa\\Downloads\\Frame 105.pdf';
const OUT_DIR  = path.join(__dirname, '../public/pdf-pages');

const HTML = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<style>
  body { margin:0; background:#888; display:flex; flex-direction:column; align-items:center; gap:16px; padding:16px; }
  canvas { display:block; box-shadow:0 4px 20px rgba(0,0,0,.4); }
</style>
</head>
<body>
<script>
window.__renderPDF = async (dataUrl, scale) => {
  // Load PDF.js from CDN
  await new Promise(r => {
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
    s.onload = r;
    document.head.appendChild(s);
  });
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

  const pdf = await pdfjsLib.getDocument({ url: dataUrl }).promise;
  const results = [];
  for (let i = 1; i <= pdf.numPages; i++) {
    const page  = await pdf.getPage(i);
    const vp    = page.getViewport({ scale });
    const canvas = document.createElement('canvas');
    canvas.width  = vp.width;
    canvas.height = vp.height;
    document.body.appendChild(canvas);
    await page.render({ canvasContext: canvas.getContext('2d'), viewport: vp }).promise;
    results.push({ page: i, width: vp.width, height: vp.height });
  }
  return results;
};
</script>
</body>
</html>`;

(async () => {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  // Read the PDF as base64
  console.log('Reading PDF...');
  const pdfBytes = fs.readFileSync(PDF_PATH);
  const base64   = pdfBytes.toString('base64');
  const dataUrl  = `data:application/pdf;base64,${base64}`;

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page    = await context.newPage();

  // Load HTML with PDF.js
  await page.setContent(HTML);
  await page.waitForTimeout(500);

  // Render the PDF at 1.5× scale (good quality)
  console.log('Rendering PDF pages...');
  let pages;
  try {
    pages = await page.evaluate(
      ({ du }) => window.__renderPDF(du, 1.5),
      { du: dataUrl }
    );
  } catch (e) {
    console.error('PDF render error:', e.message);
    await browser.close();
    return;
  }

  console.log(`Rendered ${pages.length} pages`);

  // Screenshot each canvas
  const canvases = await page.locator('canvas').all();
  for (let i = 0; i < canvases.length; i++) {
    const outPath = path.join(OUT_DIR, `page-${String(i + 1).padStart(2, '0')}.png`);
    await canvases[i].screenshot({ path: outPath });
    console.log(`✓ Page ${i + 1} → ${outPath} (${pages[i]?.width}×${pages[i]?.height})`);
  }

  await browser.close();
  console.log('\nDone. PDF pages saved to public/pdf-pages/');
})();
