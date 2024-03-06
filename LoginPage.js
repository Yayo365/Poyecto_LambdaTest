const {test, expect} = require ("@playwright/test")

exports.FJ = class Login {
    constructor (page){
        this.page = page
    }
       //Open Url
       async Openurl(http){
        await this.page.goto(http)
    }
    //Mouse Hover
    async MouseHover(Hover){
        await this.page.locator(Hover).hover()
     }
     //Click on 
    async ClickOn(Clck){                          
        await expect(Clck).toBeVisible
        await expect(Clck).toBeEnabled
        await this.page.locator(Clic).click()
    }
    //Enter info on Fields
    async EnterData(Data, valor){
        try {
            const EnterT =  this.page.locator(Data)
            await expect(EnterT).toBeVisible
            await expect(EnterT).toBeEnabled
            await this.page.locator(Data).type(valor)
        }
        catch (error){
            console.log("Hay un dato que no ha sido ingresado, por favor corrigelo")            
        } 
    }
}