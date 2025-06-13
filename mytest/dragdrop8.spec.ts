import { test, Browser, Locator, Page } from "@playwright/test";
import { chromium, webkit } from "@playwright/test";

test("move to element", async () => {
  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();
  await page.goto("https://jqueryui.com/droppable");

  
   await page.locator("//div[@id='draggable']").dragTo(page.locator("//div[@id='droppable']"));


});
