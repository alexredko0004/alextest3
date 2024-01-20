// @ts-check
const { test, expect, chromium } = require('@playwright/test');

//Test_1
test('navigation', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://ek.ua/ua/');
    await page.getByRole('link', { name: 'Eng' }).click();
    await page.getByRole('link', { name: 'Photo', exact: true }).click();
    await page.getByRole('link', { name: 'Action Cameras' }).first().click();
    await page.locator('.l-s-top > a:nth-child(2)').click();
    await expect(page.locator('div').filter({ hasText: 'with delivery to Dnipro' }).nth(4)).toBeChecked;
    await page.close();
  });
  
  //Test_2
  test('search MacBook', async ({ page }) => {
    await page.goto('https://ek.ua/ua/');
    await page.getByRole('link', { name: 'Eng' }).click();
    await page.goto('https://ek.ua/en/list/298/');
    await page.locator('label').filter({ hasText: /^Apple$/ }).click();
    await page.getByRole('link', { name: 'Show' }).click();
    await page.locator('#order_label').getByRole('img').click();
    await page.locator('#order_select').getByRole('link', { name: 'highest to lowest price' }).click();
    await expect(page.locator('.m-s-f1 > a:nth-child(11)').first()).toHaveText("fingerprint scanner");
    await page.close();
  });
  
