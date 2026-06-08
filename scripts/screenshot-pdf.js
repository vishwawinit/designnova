const { chromium } = require('@playwright/test');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  // Screenshot the PDF — open via file:// so Chrome renders it natively
  const pdfPath = 'file:///C:/Users/vishwa/Downloads/Frame%20105.pdf';
  console.log('Opening PDF...');
  await page.goto(pdfPath, { waitUntil: 'load', timeout: 30000 });
  await page.waitForTimeout(3000);

  // Screenshot full page
  await page.screenshot({
    path: path.join(__dirname, '../public/pdf-screenshot.png'),
    fullPage: false,
  });
  console.log('PDF screenshot saved to public/pdf-screenshot.png');

  // Now screenshot the live website
  console.log('Opening website...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2000);

  // Full page screenshot
  await page.screenshot({
    path: path.join(__dirname, '../public/site-full.png'),
    fullPage: true,
  });
  console.log('Full site screenshot saved to public/site-full.png');

  // Hero section only
  await page.screenshot({
    path: path.join(__dirname, '../public/site-hero.png'),
    fullPage: false,
    clip: { x: 0, y: 0, width: 1440, height: 900 },
  });
  console.log('Hero screenshot saved to public/site-hero.png');

  await browser.close();
  console.log('Done.');
})();
