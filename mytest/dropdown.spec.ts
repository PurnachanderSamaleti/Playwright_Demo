import{test, expect, Browser, Page, Locator} from '@playwright/test';
import {webkit, firefox, chromium} from '@playwright/test';
import { count } from 'console';

test('dropdown test', async() =>{


const browser: Browser = await firefox.launch({headless: false});
const page: Page = await browser.newPage();

await page.goto("https://www.magupdate.co.uk/magazine-subscription/phrr");
const countryDropDown = ('select#Contact_CountryCode');
//await page.selectOption(countryDropDown, {value:'AD'});          //page.selectoption methood is used when we have dropdown having select tag
//await page.selectOption(countryDropDown, {label: 'Australia'});  // select throught text
await page.selectOption(countryDropDown, {index: 11});             // select through index value in the dropdown

//select#Contact_CountryCode>option
const alloptions = await page.$$(countryDropDown + ' > option');    // Double dollar means select multiple elements to print and single dollar means select single element
console.log(alloptions.length);

for(const e of alloptions){
    const text = await e.textContent();
    console.log(text);
        if(text === 'India'){
            await page.selectOption(countryDropDown, {label: text});
            break;
        }
}
await page.waitForTimeout(5000);
})