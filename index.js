const fs = require("fs");
const puppeteer = require("puppeteer");
const sites = require("./sites");

const date = new Date();
const monthNumber = date.getMonth() + 1;
const dateNumber = date.getDate();
const year = date.getFullYear();
const directoryName = `${year}_${monthNumber}_${dateNumber}`;

sites.forEach(async ({ url, name }) => {
  /**
   * Check to see if images directory is present
   * If not, create it.
   */
  fs.access("./images", (error) => {
    error && fs.mkdirSync("./images");
  });

  /**
   * Check to see if a directory with today's date exists
   * If not, create it.
   */
  fs.access(`./images/${directoryName}`, (error) => {
    error && fs.mkdirSync(`./images/${directoryName}`, { recursive: true });
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({
    path: `./images/${directoryName}/image-${name}.png`,
  });
  await browser.close();
});
