import { test, Browser, Locator, Page } from "@playwright/test";
import { webkit, chromium, firefox } from "playwright";

test("Focus element test", async () => {
  const browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();
  await page.goto("https://www.orangehrm.com/en/30-day-free-trial");

  const fullname = await page.locator("text=FullName");
  fullname.focus();
  fullname.fill("Testing Automation");

  await page.waitForTimeout(2000);
});
