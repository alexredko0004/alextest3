import {expect} from '@playwright/test';

export default class CustomsOnlineCalculator {
    constructor(page){
       this.page = page
       this.carsDropdownFuel = page.locator("//select[contains(@name,'fuel')]")
       this.carsPriceInput = page.locator("(//input[@name])[1]")
       this.carsEngineCapacity = page.locator("(//input[contains(@name,'engine')])[1]")
       this.calculateButton = page.locator("//button[contains(@class,'calc')]")
       this.totalAmount = page.locator("(//div/span[contains(@class,'casual')])[5]")
    }
    async performValidCalculationDiesel(price,capacity,result){
       await this.page.waitForTimeout(500)
       await this.carsDropdownFuel.selectOption('2')
       await this.carsPriceInput.fill(price)
       await this.carsEngineCapacity.fill(capacity)
       await this.calculateButton.click()
       await expect(this.totalAmount).toHaveText(result)
    }
}

