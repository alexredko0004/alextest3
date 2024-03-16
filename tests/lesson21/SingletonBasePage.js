import {Page, chromium, firefox, webkit} from "@playwright/test"

export class BasePage {
    static page
    static context
    static browser
    constructor(){}

    static async getPage (){
        if (!BasePage.page) {
            let browser = await chromium.launch();
            let context = await browser.newContext();
            let page = await context.newPage()
            BasePage.page = page
            BasePage.browser = browser
            }
            return BasePage.page
        }
        static async closePage (){
            if (BasePage.page&&BasePage.browser) {
                BasePage.page=undefined
                BasePage.browser.close()
                }
            }
    }