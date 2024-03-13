import {Page, chromium, firefox, webkit} from "@playwright/test"

export class BasePage {
    static page
    static browser
    constructor(){}

    static async getPage (){
        if (!BasePage.page) {
            let browser = await firefox.launch();
            let context = await browser.newContext();
            let page = await context.newPage()
            BasePage.page = page
            }
            return BasePage.page
        }
    }