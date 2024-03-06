const {test, expect} = require("@playwright/test")

exports.FJ = class Register {
    constructor(page){
        this.page=page;
        //const MouseTest = page.locator("(//span[contains(.,'My account')])[2]")
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
    //Mouse Hover
    async MouseHover(Hover){    
        await this.page.locator(Hover).hover()
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
    //Valida que un texto y campos
    async Asserts_Happy(Field, valor){
        const Valid = this.page.locator(Field)
        await expect(Valid).toBeVisible(valor)
    }
    //Validar textos de error
    async Assert_Failed(Txt, valor){
        const Valid = this.page.locator(Txt)
        await expect(Valid).toBeVisible(valor)
    }
}