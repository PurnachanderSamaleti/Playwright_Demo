import {test, expect, Browser, Page, Locator,} from '@playwright/test';
import { webkit, chromium, firefox} from '@playwright/test';
test ('chaining locators test', async() =>{
    const browser: Browser = await chromium.launch({headless: false});
    const page:Page = await browser.newPage();
    await page.goto("https://www.orangehrm.com/en/30-day-free-trial");
    await page.locator('form#Form_getForm >> #Form_getForm_Name').fill("Chandu");
    await page.locator('form#Form_getForm >> text=Get Your Free Trial').click();
    
    await new Promise(() =>{});   // waiting for 30 seconds before closing the browser
})