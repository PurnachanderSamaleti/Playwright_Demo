const{test, expect} = require('@playwright/test');

test('Browser Context-Validating Error Login', async({page})=>{    // I have used a 'page' fixtue here so no need to create a new context and page
// const context = await browser.newcontext();
// page = await context.newpage();
await page.goto('https://rahulshettyacademy.com/client');
await page.locator('#userEmail').fill('anshika@gmail.com');
await page.locator('#userPassword').fill('Iamking@000');
await page.locator("[value='Login']").click();

//if the below line is not working then use the alternative option i.e. "await page.locator("//div[@class='card-body']").first().waitfor();"
await page.waitForLoadState('networkidle');  // Wait for the network to be idle(all the API's should be completed)
const titles = await page.locator("//div[@class='card-body']").allTextContents();  // It will print all the titles of the cards
console.log(titles);
})

test('Dropdown test', async ({page})=>{
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
const username = await page.locator('#username').fill('rahulshettyacademy');
const password = await page.locator('#password').fill('learning');
const dropdown = await page.locator('select.form-control').selectOption('consult');
const blinkingtext = await page.locator("[href*='documents-request']");
//await page.pause();   /// This will pause the execution of the test and open the browser for debugging

await page.locator('.radiotextsty').nth(1).click();  // Click on the radio button  or use first()/last()
await page.locator('#okayBtn').click();  // Click on the OK button
console.log(await page.locator('.radiotextsty').last().isChecked());  // Check if the last radio button is checked
await expect(page.locator('.radiotextsty').last()).toBeChecked();  // Check if the last radio button is checked using expect
await page.locator('#terms').click();  // Click on the terms and conditions checkbox
await expect(page.locator('#terms')).toBeChecked();  // Check if the terms and conditions checkbox is checked using expect
await page.locator('#terms').uncheck();
expect (await page.locator('#terms').isChecked()).toBeFalsy();  // Check if the terms and conditions checkbox is unchecked using expect
await expect(blinkingtext).toHaveAttribute("class", "blinkingText");  // Check if the blinking text has the class value of blinkingText using expect
})