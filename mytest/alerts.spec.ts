import{test, expect, Browser, Page, Locator} from '@playwright/test';          // libraries to import
import{webkit, chromium, firefox} from '@playwright/test';
import path from 'path';
 test.skip('Alert with Ok', async() =>{                                        // test.skip means it will not run the test
    const browser: Browser = await firefox.launch({headless: false})
    const page: Page = await browser.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");

    // / Enabling dialog window handler
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();     // close by using ok button
        //await dialog.dismiss();    // close by using cancel button
    })
    await page.click('text=Simple Alert');
    await page.waitForTimeout(3000);

 })

 test('Confirmation alert', async() =>{

    const browser: Browser = await chromium.launch({headless: false})
    const page: Page = await browser.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling dialog window handler
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();       // close by using ok button
        //await dialog.dismiss();    // close by using cancel button
    })
    await page.click('text=Confirmation Alert');
    await expect(page.locator('text=You pressed OK!')).toHaveText('You pressed OK!');

    await page.waitForTimeout(3000);
 })

 test('Prompt dialog', async() =>{

    const browser: Browser = await chromium.launch({headless: false})
    const page: Page = await browser.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");
    //Enabling dialog window handler
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('John');
    })
    await page.click('//button[@id="promptBtn"]');
    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello John! How are you today?');

    await page.waitForTimeout(3000);
 })