const {test, request} = require ("@playwright/test")
const {FP} = require ("./Forgot")

let WebUrl = "https://ecommerce-playground.lambdatest.io/index.php?route=common/home"
var time = 1500

test.beforeEach(async ({page})=> {
    const LogForgotP = new FP (page)
    //Abrir URL
    await LogForgotP.Openurl(WebUrl)
    //Entrar a la seccion de registro
    await LogForgotP.MouseHover("(//span[contains(.,'My account')])[2]")
    await LogForgotP.MouseHover("//span[contains(text(),'Login')]")
    await LogForgotP.ClickOn("//span[contains(text(),'Login')]")

    await page.waitForTimeout(time)
})

test ("Link Forgot Password", async({page})=> {
    const LinkForgot = new FP (page)
    await LinkForgot.ClickOn("//div[@class='form-group']//a[contains(text(),'Forgotten Password')]")
    await page.waitForTimeout(time)
    await LinkForgot.ValidaTitulo("Forgot Your Password?")
    await LinkForgot.Validartext("//h1[@class='page-title h3 mb-3']", "Forgot Your Password?")
    console.log("Validartext")

    await page.waitForTimeout(time)
})
test ("Validar Secciones de login", async ({page}) => {
    const SectForgot = new FP (page)
    await SectForgot.Validartext("//h2[contains(text(),'My Account')]", " My Account")
    await SectForgot.Validartext("//h2[contains(text(),'My Orders')]", "My Orders")
    await SectForgot.Validartext("//h2[contains(text(),'My Affiliate Account')]", "My Affiliate Account")

    await page.waitForTimeout(time)

})
test ("Click on Continuar con campo vacio", async ({page})=> {
    const ErrorForgot = new FP (page)
    await ErrorForgot.ClickOn("//div[@class='form-group']//a[contains(text(),'Forgotten Password')]")
    await ErrorForgot.ClickOn("//button[contains(text(),'Continue')]")
    await ErrorForgot.Validartext("//div[@class='alert alert-danger alert-dismissible']"," Warning: The E-Mail Address was not found in our records, please try again!")
    await page.waitForTimeout(time)

})
test ("Introducir Email Valido", async ({page}) => {
    const HappyForgot = new FP (page)
    await HappyForgot.EnterText("//div[@class='alert alert-danger alert-dismissible']", "Testing_Test@test.com")
    await HappyForgot.ClickOn("//button[contains(text(),'Continue')]")
    await HappyForgot.Validartext("//div[@class='alert alert-success alert-dismissible']", " An email with a confirmation link has been sent your email address.")

    await page.waitForTimeout(time)
    await LinkForgot.ValidaTitulo("My Account")

})