const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:' + process.env.PORT);
  const searchFirstName = await page.$('starter-app');
  console.log(searchFirstName);
})();




