import{test} from'@playwright/test';

test('Login with wrong credentials', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());

    await page.locator('#username').fill('rahulshettyacademy ');
    await page.locator('#password').fill('learning');
    await page.locator('#signInBtn').click();
    console.log(await page.locator("[style*='block']").textContent());
    await page.waitForTimeout(2000);

})

test('Login with right credentials', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());

    const cardtitles = page.locator("//div[@class='card-body']//a");

    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('learning');
    await page.locator('#signInBtn').click();

   // console.log(await page.locator("//div[@class='card-body']//a").nth(0).textContent());   // nth of 0 means first element
   console.log(await cardtitles.first().textContent());   // For first title of the card
   const alltitles = await cardtitles.allTextContents();  // It will print all the titles of the cards
    console.log(alltitles);
   
   await page.waitForTimeout(2000);

});