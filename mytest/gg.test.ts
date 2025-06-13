import { test, expect, Page, Browser, Locator } from "@playwright/test";
import { webkit, chromium, firefox } from "@playwright/test";

test("locator2 test", async () => {
  const browser: Browser = await firefox.launch({ headless: false });
  const page: Page = await browser.newPage();
  await page.goto("......"); // when we have a attribute as data-testid then use the below
  await page.getByTestId("[data-testid=username").fill("chandu"); // or
  await page.getByTestId("username").fill("chandu");
  await page.getByTestId("password").fill("123456");
  await page.getByTestId("login").click();
});
