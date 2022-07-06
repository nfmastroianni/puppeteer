const puppeteer = require("puppeteer");
const sites = require("./sites");

sites.forEach(async ({ url, name }) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({ path: `./images/image-${name}.png` });
  await browser.close();
});
