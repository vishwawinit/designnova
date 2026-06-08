const { chromium } = require('@playwright/test');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  console.log('Opening website...');
  try {
    await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 30000 });
  } catch(e) {
    console.log('load timed out, continuing...');
  }
  await page.waitForTimeout(3000);

  const pageHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log('Page height:', pageHeight);

  const sections = [
    { name:'hero',        scroll:0 },
    { name:'ticker',      scroll:750 },
    { name:'testimonials',scroll:950 },
    { name:'projects',    scroll:2000 },
    { name:'certificate', scroll:3200 },
    { name:'batch',       scroll:4200 },
    { name:'internship',  scroll:5000 },
    { name:'footer',      scroll:Math.max(0, pageHeight - 900) },
  ];

  for (const s of sections) {
    await page.evaluate(y => window.scrollTo(0, y), s.scroll);
    await page.waitForTimeout(700);
    await page.screenshot({ path: path.join(__dirname, `../public/ss-${s.name}.png`) });
    console.log(`✓ ${s.name}`);
  }

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(__dirname, '../public/ss-full.png'), fullPage: true });
  console.log('✓ full page');

  await browser.close();
  console.log('\nAll screenshots saved to public/ss-*.png');
})();
