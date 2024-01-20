// @ts-check
const { test, expect, chromium } = require('@playwright/test');
//Test_1
test('has settings', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://meteofor.com.ua/');
  await page.getByRole('link', { name: 'Тиждень' }).click();
  await page.getByRole('button', { name: 'Набір даних у прогнозі' }).click();
  await expect(page.locator('.parameters-item').first()).toHaveText('Температура повітря');
  await expect(page.locator('.parameters-group > div:nth-child(4) > div:nth-child(2)')).toHaveText('Пориви вітру');
  await expect(page.locator('.parameters-group > div:nth-child(8) > div').first()).toContainText('в рідкому');
  await expect(page.getByLabel('Назад')).toBeVisible;
  await page.close();
});

//Test_2
test('search capital weather', async ({ page }) => {
  await page.goto('https://meteofor.com.ua/');
  await page.getByRole('link', { name: 'Тиждень' }).click();
  await page.getByRole('link', { name: 'Україна' }).first().click();
  await page.getByRole('link', { name: 'Київ', exact: true }).first().click();
  await expect(page.getByText('Погода у Києві сьогодні', { exact: true })).toHaveText("Погода у Києві сьогодні");
  await page.close();
});

//Test_3
test('search capital weather via search', async ({ page }) => {
  await page.goto('https://meteofor.com.ua/');
  await page.pause();
  await page.getByPlaceholder('Пошук місця розташування').click();
  await page.getByPlaceholder('Пошук місця розташування').fill('Київ');
  await page.getByPlaceholder('Пошук місця розташування').click();
  await page.getByPlaceholder('Пошук місця розташування').press('Enter');
  await expect(page.getByText('Погода у Києві сьогодні', { exact: true })).toHaveText("Погода у Києві сьогодні");
  await page.close();
});