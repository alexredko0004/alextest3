import {expect} from '@playwright/test';

export default class CustomsOnlineCalculator {
    constructor(page){
       this.page = page
       this.carsDropdownFuel = page.locator("//select[contains(@name,'fuel')]")
       this.carsPriceInput = page.locator("(//input[@name])[1]")
       this.carsEngineCapacity = page.locator("(//input[contains(@name,'engine')])[1]")
       this.carsEngineElCapacity = page.locator("//input[contains(@name,'engineBt')]")
       this.calculateButton = page.locator("//button[contains(@class,'calc')]")
       this.totalAmount = page.locator("(//div/span[contains(@class,'casual')])[5]")
       this.motoTab = page.locator("//div/nav/a[@data-value='2']")
       this.message = page.locator("//div[contains(@class,'result-error')]/div/div[contains(@class,'message')]/span")
    }
    async performValidCalculationDiesel(price,capacity,result){
       await this.page.goto('https://auto.ria.com/uk/rastamozhka-avto/calculator/')
       await this.carsDropdownFuel.selectOption('2')
       await this.carsPriceInput.fill(price)
       await this.carsEngineCapacity.fill(capacity)
       await this.calculateButton.click()
       await expect(this.totalAmount).toHaveText(result)
    }
    async performValidCalculationElectro(price,capacity,result){
      await this.page.goto('https://auto.ria.com/uk/rastamozhka-avto/calculator/')
        await this.carsDropdownFuel.selectOption('6')
        await this.carsPriceInput.fill(price)
        await this.carsEngineElCapacity.fill(capacity)
        await this.calculateButton.click()
        await expect(this.totalAmount).toHaveText(result)
     }
     async performValidCalculationHybrid(price,capacity,result){
      await this.page.goto('https://auto.ria.com/uk/rastamozhka-avto/calculator/')
        await this.carsDropdownFuel.selectOption('5')
        await this.carsPriceInput.pressSequentually('80000')
        await this.calculateButton.click()
        await expect(this.totalAmount).toHaveText('105720')
     }
    async performInvalidCalculationGas(price,capacity,result){
        await this.page.goto('https://auto.ria.com/uk/rastamozhka-avto/calculator/')
        await this.carsPriceInput.fill(price)
        await this.carsEngineCapacity.fill(capacity)
        await this.calculateButton.click()
        await expect(this.message).toHaveText(result)
     }
     async performInvalidCalculationElectro(price,capacity,result){
      await this.page.goto('https://auto.ria.com/uk/rastamozhka-avto/calculator/')
      await this.carsDropdownFuel.selectOption('6')
      await this.carsPriceInput.fill(price)
      await this.carsEngineElCapacity.fill(capacity)
      await this.calculateButton.click()
      await expect(this.message).toHaveText(result)
   }
}

