import{test, expect, Browser, Page, Locator} from '@playwright/test';
import {webkit, firefox, chromium} from '@playwright/test';
import { count } from 'console';

test('dropdown test', async() =>{


const browser: Browser = await firefox.launch({headless: false});
const page: Page = await browser.newPage();

await page.goto("https://www.flipkart.com/");
//await page.getByPlaceholder("Search for Products, Brands and More").fill("macbook");
await page.getByPlaceholder('Search for Products, Brands and More').pressSequentially("macbook", {delay: 500});
})