const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.uol.com.br');
  await page.screenshot({path: `example-${new Date().getTime()}.png`});

  await browser.close();
})();