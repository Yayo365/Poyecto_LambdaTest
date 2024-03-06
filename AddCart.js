const {test, expect} = require ("@playwright/test")

exports.ADD = class Add_Products {
    constructor (page){
        this.page=page;
    }
    //Open Url
    async Openurl(http){
        await this.page.goto(http);
    }
    //Click on 
    async ClickOn(Clic){                          
        await expect(Clic).toBeVisible
        await expect(Clic).toBeEnabled
        await this.page.locator(Clic).click()
    }
    async MouseHover(Hover){
        await this.page.locator(Hover).hover()
     }
}