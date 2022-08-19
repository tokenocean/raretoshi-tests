console.log(`###### Raretoshi Integration Test ######
-------------------------------------`);

let config;
try {
  config = require("./config");
} catch {
  // if we can't get user config, just use default arguments
}

// obtain & print arguments
let baseUrl = config && config.baseUrl ? config.baseUrl : "http://localhost:3000/";
console.log(`testing URL ${baseUrl}`);

// dependencies
const test = require("tape");
const puppeteer = require("puppeteer");

const delay = async (ms) =>
      await new Promise((r) => setTimeout(r, ms || 1000));

// Function to setup/launch Puppeteer and open Coinos homepage:
const openCoinosHome = async () => {
  const opts = {
    headless: false,
    timeout: 60000,
    args: [
      "--disabled-setupid-sandbox",
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--disable-setuid-sandbox",
      "--no-first-run",
      "--no-sandbox",
      "--no-zygote",
    ],
  };
  opts.defaultViewport = null;

  return new Promise(async (resolve) => {
    const browser = await puppeteer.launch(opts);
    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36"
    );
    await page.goto(baseUrl, {
      waitUntil: "networkidle2",
      timeout: 60000,
    });
    resolve([browser, page]);
  });
};

test("Can open homepage", async (t) => {
  const [browser, page] = await openCoinosHome();
  await delay(2500);

  const body = await page.evaluate(() => document.body.innerText);
  t.ok(
    body.search("Raretoshi") > -1,
    `Homepage loads OK (displays "Raretoshi")`
  );

  await browser.close();
  t.end();
});
