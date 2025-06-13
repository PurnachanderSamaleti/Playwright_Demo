import { test, expect, Browser, Page, Locator } from "@playwright/test";  // existing object variables which is already there in Playwright
import { webkit, chromium, firefox } from "@playwright/test";             // browser information
//import { title } from "process";

test("Login test", async() => {
  const browser: Browser = await chromium.launch({
    headless: false /*channel: "chrome"*/ /*channel: "msedge"*/,
  });
  const page: Page = await browser.newPage();
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  const emailID: Locator = await page.locator('[id="input-email"]'); // we can use # and Id value also when we have ID attribute
  const password: Locator = await page.locator('[id="input-password"]');
  const loginbutton: Locator = await page.locator('[value="Login"]');

  await emailID.fill("samaletichandu123@gmail.com");
  await password.fill("Chandu@123");
  await loginbutton.click();

  const pagetitle = await page.title();
  console.log("home page title: ", pagetitle);

  await page.screenshot({ path: "homepage.png" });
  expect(pagetitle).toEqual("My Account");
  await browser.close();
});

test("register test", async () => {
  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register"
  );
  const firstname: Locator = await page.locator('[id="input-firstname"]');
  const lastname: Locator = await page.locator('[id="input-lastname"]');
  const email: Locator = await page.locator('[id="input-email"]');
  const telephone: Locator = await page.locator('[id="input-telephone"]');
  const Password: Locator = await page.locator('[id="input-password"]');
  const confmPassword: Locator = await page.locator('[id="input-password"]');
  const checkbox: Locator = await page.locator('[name="agree"]');
  const continuebtn: Locator = await page.locator('[value="Continue"]');

  await firstname.fill("samaleti");
  await lastname.fill("Chandu");
  await email.fill("samaletichandu123@gmail.com");
  await telephone.fill("1234567891");
  await Password.fill("Chandu@123");
  await confmPassword.fill("Chandu@123");
  await checkbox.check();
  await continuebtn.click();
  await page.screenshot({ path: "Registerpage.png" });
  await browser.close();
});
