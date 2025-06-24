import { Browser, Page, test } from "@playwright/test";
import { webkit } from "@playwright/test";

test("mouse click events", async () => {
  const browser: Browser = await webkit.launch({ headless: false });
  const page: Page = await browser.newPage();
  await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

  // double click:
  await page.getByText("Double-Click Me To See Alert").dblclick();
  await page.waitForTimeout(2000);

  //right click or context click:
  await page.getByText("right click me").click({ button: "right" });
  await page.waitForTimeout(2000);

  //shift + click:   // this is used to open a new tab or window
  await page.goto("https://the-internet.herokuapp.com/shifting_content");
  await page
    .getByText("Example 1: Menu Element")
    .click({ modifiers: ["Shift"] });
  await page.waitForTimeout(2000);

  //mouse hover:
  await page.goto("https://www.spicejet.com/");
  await page.getByText("Add-ons").first().hover();
  await page.getByText("Visa Services").first().click();
  await page.waitForTimeout(5000);
});
