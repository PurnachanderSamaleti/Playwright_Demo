import{test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test';
import{webkit, chromium, firefox} from '@playwright/test';

test('Login new context test', async()=>{
  const browser: Browser = await firefox.launch({ headless: false });

  //browserContext:1
  const browaserContext1: BrowserContext = await browser.newContext();
  const page1: Page = await browaserContext1.newPage();

  //browserContext:2                                               // It will create a new browser context for the second browser instance without closing/logout the first one.
  const browserContext2: BrowserContext = await browser.newContext();
  const page2: Page = await browserContext2.newPage();

  //browser:1
  await page1.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  const emailId1: Locator = await page1.locator('[id="input-email"]');
  const password1: Locator = await page1.locator('[id="input-password"]');
  const loginButton1: Locator = await page1.locator('[value="Login"]');

  await emailId1.fill("samaletichandu123@gmail.com");
  await password1.fill("Chandu@123");
  await loginButton1.click();

  //browser:2
  await page2.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  const emailId2: Locator = await page2.locator('[id="input-email"]');
  const password2: Locator = await page2.locator('[id="input-password"]');
  const loginButton2: Locator = await page2.locator('[value="Login"]');

  await emailId2.fill("pwtest@opencart.com");
  await password2.fill("playwright@123");
  await loginButton2.click();
})