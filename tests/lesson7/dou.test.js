 // @ts-check
const { test, expect, chromium } = require('@playwright/test');
 
 //Test_1
 test('search articles', async ({ page }) => {
    await page.goto('https://dou.ua/');
    await page.pause();
    await page.locator('//header//li/a[contains(@href,"lenta")]').click()
    //await page.getByRole('link', { name: 'Стрічка' }).click();
    await page.getByRole('combobox').selectOption('https://dou.ua/lenta/projects/');
    await expect(page.getByText('Спецпроєкти')).toBeInViewport;
    await expect(page.getByRole('combobox')).toContainText('Проєкти');
    await expect(page.getByRole('heading', { name: 'Не пропустіть' })).toBeVisible;
    await page.getByPlaceholder('пошук').click();
    await page.getByPlaceholder('пошук').fill('automation');
    await page.getByPlaceholder('пошук').press('Enter');
    await page.locator('#gs_tti50').click();
    // await expect(page.locator('#gs_tti50')).toContainText('automation');
    await expect(page.getByRole('link', { name: 'SQA' })).toContainText('Automation');
    await page.close();
  });