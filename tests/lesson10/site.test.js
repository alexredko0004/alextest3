import { test, expect, chromium } from '@playwright/test';
import CustomsOnlineCalculator from './Page.js';
import { positiveTestDataDiesel, negativeTestDataDiesel, negativeTestDataElectro} from './testData.js';

positiveTestDataDiesel.forEach(({price,capacity,result})=>{
test(`Testing positive diesel values${price}`, async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    // await page.goto('https://auto.ria.com/uk/');
    // await page.locator("(//ul/li/a[starts-with(@href,'/uk/rast')])[1]").click();   //For some reason it doesn't work this way. I had to add direct page URL in my page class
    let newPage = new CustomsOnlineCalculator(page);
    await newPage.performValidCalculationDiesel(price,capacity,result);
    await page.close();
    await browser.close();
  })
})

for(let element of negativeTestDataDiesel) {
  let {price,capacity,result} = element
  test(`Testing negative gas values${price}`, async () => {
      const browser = await chromium.launch();
      const page = await browser.newPage();
      let newPage = new CustomsOnlineCalculator(page);
      await newPage.performInvalidCalculationGas(price,capacity,result);
      await page.close();
      await browser.close();
    })}

negativeTestDataElectro.forEach(({price,capacity,result})=>{
test(`Testing negative electro values${price}`, async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    let newPage = new CustomsOnlineCalculator(page);
    await newPage.performInvalidCalculationElectro(price,capacity,result);
    await page.close();
    await browser.close();
  })
})