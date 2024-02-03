import { test as extTest, chromium } from '@playwright/test';
import CustomsOnlineCalculator from '../Page.js';

export const test = extTest.test.extend({
    CustomsOnlineCalculator: async ({ page }, use) => {
        console.log('Before fixture')
        await page.goto('https://auto.ria.com/uk/rastamozhka-avto/calculator/');
        // Set up the fixture.
        let browser= await chromium.launch();
        const newPage = new CustomsOnlineCalculator(page);
        // Use the fixture value in the test.
        await use(newPage);
        // Clean up the fixture.
        console.log('After fixture')
        await page.close();
        await browser.close(); 

      },
})
export {expect,chromium} from '@playwright/test' 