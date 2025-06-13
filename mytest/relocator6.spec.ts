import {test, expect, Page, Browser, Locator} from '@playwright/test';
import {webkit, chromium, firefox} from '@playwright/test';

test('aria role locator', async() =>{
    const browser: Browser = await chromium.launch({headless: false});
    const page:Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
    await expect(page.getByRole('heading', {name: 'Register Account'})).toBeVisible();
    await expect(page.getByRole('link',{name: 'Forgotten Password'} )).toBeVisible();
    await page.getByRole('radio',{name: 'Yes'}).click();
    await expect(page.getByRole('checkbox')).toBeVisible();
    await page.getByRole('checkbox').click();
    await page.waitForTimeout(3000);
})