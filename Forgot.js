const {test, expect} = require ("@playwright/test")

exports.FP = class Forgot {
    constructor (page){
        this.page = page
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
//Open Url
async Openurl(http){
    await this.page.goto(http)
}
//Validar la URL
async ValidaTitulo(Tit){
    await expect(this.page).toHaveTitle(Tit)
}
//Valida que un texto este visible
async Validartext(TextVi, valor){  
    const Valid = this.page.locator(TextVi)
    await expect(TextVi).toBeVisible
    await expect(Valid).toBeVisible(valor)
}
//Ingresar datos en los campos de texto
async EnterText(Teext, valor){   
    try {
        const Teext =  this.page.locator(Teext)
        await expect(Teext).toBeVisible
        await expect(Teext).toBeEnabled
        await this.page.locator(Teext).type(valor)
    }catch (error){
        console.log("Hay un dato que no ha sido ingresado, por favor corrigelo")
    } 
}
}