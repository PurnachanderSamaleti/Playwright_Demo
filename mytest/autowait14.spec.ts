import { Browser, Page, test } from "@playwright/test";
import { webkit, chromium, firefox } from "playwright";

// test.use({
//     actionTimeout:10000    // set the action timeout for all tests in this file is 10 secs
// })
test("autowait", async () => {
  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();
  page.setDefaultTimeout(10000); //it will override the default time, ex: default timeout for playwright is 30 secs after overriding it is 10 secs now
  // default time out = 30 secs
  await page.goto("https://www.orangehrm.com/en/30-day-free-trial");
  await page.getByPlaceholder("Phone Number*").fill("123456");
  await page.locator("form#Form_getForm >> #Form_getForm_Name5").fill("Chandu");
});
