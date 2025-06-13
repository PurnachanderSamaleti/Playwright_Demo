import { test, expect, Locator, Page, Browser } from "@playwright/test";
import { webkit, firefox, chromium } from "@playwright/test";

test("mousehover test", async () => {
  const browser: Browser = await firefox.launch({ headless: false });
  const page: Page = await browser.newPage();
  await page.goto("https://www.spicejet.com/");
  //await page.click("text=Allow");
  await page.getByText("Add-ons").first().hover();

  await page.getByText("Taxi").first().click();

  await page.waitForTimeout(5000);
});
