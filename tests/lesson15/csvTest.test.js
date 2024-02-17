import {test, expect} from "@playwright/test"
const fs = require('fs')
const csv = require('@fast-csv/parse')

test.describe('File download test', async()=>{

    test ('Download csv file', async({page})=>{
        await page.goto('https://the-internet.herokuapp.com/')
        await page.locator("//li/a[@href='/download']").click()  
        const downloadPromise = page.waitForEvent('download')
        await page.locator("(//div/a[contains(@href,'.csv')])[2]").click()
        const download = await downloadPromise
        const path = `../../downld/${download.suggestedFilename()}`
        await download.saveAs(path)
        expect(
            (await fs.promises.stat(await download.path())).size).toBeGreaterThan(10)   
        
        let results = new Promise((resolve,reject)=>{
           let dataArray =[];

        csv.parseFile(path,{headers:true, skipLines:4})
        .on('error', (error) => reject(error))
        .on('data', (row) => dataArray.push(row))
        .on('end', ()=>{
            resolve(dataArray)
            try {
            fs.unlinkSync(path);
            console.log('File deleted!');
            } catch (err) {
            console.error(err.message);
            } 
           });
        })
        let output = await results;
        expect (output[0]).toEqual(expect.objectContaining({
                'Device name': 'iPhone 13',
                'Device Type': 'Mobile',
                OS: 'iOS',
                'OS version': '15'
        }))
        console.log(output[0])
    })
})