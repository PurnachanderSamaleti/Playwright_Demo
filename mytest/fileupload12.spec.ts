import{test, expect, Browser, Page, Locator} from '@playwright/test';
import {webkit, firefox, chromium} from '@playwright/test';
import { count } from 'console';

test('single file upload', async() =>{


const browser: Browser = await firefox.launch({headless: false});
const page: Page = await browser.newPage();

await page.goto("https://www.file.io/");
await page.locator('//label[@for="select-files-input"]').setInputFiles("C:\Users\SamaletiPurnachander\Pictures\Screenshots\EN-GB.png");
await page.waitForTimeout(2000);
})

test('multiple file upload', async() =>{
const browser: Browser = await firefox.launch({headless: false});
const page: Page = await browser.newPage();
await page.goto("https://www.file.io/");
await page.locator('//label[@for="select-files-input"]').setInputFiles([
    "C:\\Users\\SamaletiPurnachander\\Pictures\\Screenshots\\EN-GB.png",
    "C:\\Users\\SamaletiPurnachander\\Pictures\\Screenshots\\EN-GB.png"
]);
await page.waitForTimeout(2000);
}