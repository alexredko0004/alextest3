// import CustomsOnlineCalculator from './Page.js';
import { test, expect} from /*'@playwright/test'*/ './fixtures/fixture';
// import CustomsOnlineCalculator from './Page.js';
import { positiveTestDataDiesel, negativeTestDataDiesel, negativeTestDataElectro} from './testData.js';

test.describe('e2e',()=>{
  positiveTestDataDiesel.forEach(({price,capacity,result},index)=>{
  test(`Testing positive diesel values ${index}`, async ({CustomsOnlineCalculator}) => {
      await CustomsOnlineCalculator.performValidCalculationDiesel(price,capacity,result);
    })
  })
})


for(let element of negativeTestDataDiesel) {
  let {price,capacity,result} = element
  test(`Testing negative gas values${price}`, async ({CustomsOnlineCalculator}) => {
      await CustomsOnlineCalculator.performInvalidCalculationGas(price,capacity,result)
    })}

negativeTestDataElectro.forEach(({price,capacity,result},index)=>{
test.only(`Testing negative electro values${index}`, async ({CustomsOnlineCalculator}) => {
    await CustomsOnlineCalculator.performInvalidCalculationElectro(price,capacity,result);
  })
})