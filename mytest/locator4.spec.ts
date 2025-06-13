import {test, expect, Browser, Page, Locator} from '@playwright/test';
import {webkit, chromium, firefox} from '@playwright/test';

test ('locator1 test', async() =>{
    const browser: Browser = await firefox.launch({headless: false});
    const page: Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
    //1. Id Selector
    const firstname: Locator = await page.locator('id=input-firstname');
    const lastname: Locator = await page.locator('id=input-lastname');

    
    await firstname.fill('samaleti');
    await lastname.fill('chandu');

    //2. class name Selector
    const logo: Locator = await page.locator('.img-responsive');

    const logoExist = await logo.isEnabled();
    console.log(logoExist);

    //3. text Selector
    const header: Locator =  await page.locator('text=Register Account')
    const continuebtn: Locator = await page.locator('text = Continue')
    const forgotpassword: Locator = await page.locator('text=Forgotten Password');

    const headerExist = await header.isEnabled();
    console.log(headerExist);

    const continuebtnExist = await continuebtn.isEnabled();
    console.log(continuebtnExist);

    const forgotPasswordExist = await forgotpassword.isEnabled();
    console.log(forgotPasswordExist);
     
    //4. css selector
    const email: Locator = await page.locator('css=input#input-email');     // 'css' selector type is not mandatory to use in locator value it's upto you
    const telephone: Locator = await page.locator('css=input[name="telephone"]');
    const checkbox: Locator = await page.locator('css=input[type="checkbox"]');


    await email.fill("samaletichandu123@gmail.com");
    await telephone.fill("123456789");
    await checkbox.click();

    //5. Xpath Selector
    const password: Locator = await page.locator('xpath=//input[@id="input-password"]');   //'xpath' selector type is not mandatory to use in locator value it's upto you
    const searchbox: Locator = await page.locator('xpath=//input[@name="search" and @type="text"]');

    
    await password.fill("546987");
    await searchbox.fill("xyz");

    
    await new Promise(() =>{});   // waiting for 30 seconds before closing the browser
});


