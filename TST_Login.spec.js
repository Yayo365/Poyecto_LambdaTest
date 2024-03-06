// @ts-check
const {test, expect} = require ("@playwright/test")
const {FJ} = require ("./LoginPage")

var WebUrl = "https://ecommerce-playground.lambdatest.io/index.php?route=common/home"
var time = 1500

test.beforeEach(async ({page})=> {
    const Login1 = new FJ (page)
    //Abrir URL
    await Login1.Openurl(WebUrl)
    //Entrar a la seccion de Login
    await Login1.MouseHover("(//span[contains(.,'My account')])[2]")
    await Login1.MouseHover("//span[contains(text(),'Login')]")
    await Login1.ClickOn("//span[contains(text(),'Login')]")
    await page.waitForTimeout(time)
})
test ("Validar Home",async ({page})=> {
    const Ent = new FJ (page)
    await Ent.EnterData("//input[@id='input-email']","Testing_Test@test1.com")
    await Ent.EnterData("//input[@id='input-password']","@Test1234")
    await Ent.ClickOn("//input[@type='submit']")
    await page.waitForTimeout(time)
}
)