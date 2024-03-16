import { test, expect, chromium, testInfo} from '@playwright/test';
import CustomsOnlineCalculator from './CustomsCalculator.js';
import { positiveTestDataDiesel, negativeTestDataDiesel, negativeTestDataElectro} from './testData.js';
import {BasePage} from './SingletonBasePage.js'

positiveTestDataDiesel.forEach(({price,capacity,result},index)=>{
  test.afterEach(async () => {
    await BasePage.closePage()
  })
    
  test(`Testing positive diesel values${index}`, async () => {
      let newPage = new CustomsOnlineCalculator(await BasePage.getPage());
      await newPage.page.goto('https://auto.ria.com/uk/');
      await newPage.page.getByRole('link', { name: 'Митний калькулятор' }).click(); 
      await newPage.page.waitForLoadState();  
      await newPage.performValidCalculationDiesel(price,capacity,result);
    })
  })