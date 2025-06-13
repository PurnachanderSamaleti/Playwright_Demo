const {test, expect, Browser} = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
//const { chromium } = require('playwright');



import { chromium, Page } from '@playwright/test';

test('test', async ({page}: { page: Page }) => {
    const username = 'pavanol';
    const password = 'test@123';
    const browser = await chromium.launch({ headless: false });

    //Login
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await page.waitForTimeout(3000);
    await login.login(username, password);
    await page.waitForTimeout(3000);

})