// @ts-check
const {test, expect} = require("@playwright/test");
const { FJ } = require("./RegisterPage");

var WebUrl = "https://ecommerce-playground.lambdatest.io/index.php?route=common/home"
const Data = ["Testing","Test","Testing_Test@test4.com","525525259009","@Test1234","@Test1234"]
const Data1 = ["","","Testing_Testtest.com","ASDFGHJKL","@Te","@Te"]

var time = 1500

test.beforeEach(async ({page})=> {
    const R = new FJ (page)
    //Abrir URL
    await R.Openurl(WebUrl)
    //Entrar a la seccion de registro
    await R.MouseHover("(//span[contains(.,'My account')])[2]")
    await R.MouseHover("//span[contains(text(),'Register')]")
    await R.ClickOn("//span[contains(text(),'Register')]")
    await page.waitForTimeout(time)
})

test('Validar Campos antes de Ingresar Datos', async ({page}) =>{
    const As = new FJ (page)
    await As.Asserts_Happy("//input[@id='input-firstname']")
    await As.Asserts_Happy("//input[@id='input-lastname']")
    await As.Asserts_Happy("//input[@id='input-email']")
    await As.Asserts_Happy("//input[@id='input-telephone']")
    await As.Asserts_Happy("//input[@id='input-password']")
    await As.Asserts_Happy("//input[@id='input-confirm']")
    await As.ClickOn("//label[@for='input-agree']")
    await page.waitForTimeout(time)
}
);

test('Enter Data_Sad Path, Mensajes de error', async ({page}) =>{
    const Ent = new FJ (page)
    await Ent.ClickOn("//input[contains(@value,'Continue')]")
    await Ent.Assert_Failed("//div[contains(text(),'First Name must be between 1 and 32 characters!')]","First Name must be between 1 and 32 character!")
    await page.waitForTimeout(time)

    page.close()
}
);

test('Enter Data_Happy Path', async ({page}) =>{
    const Ent = new FJ (page)
    await Ent.EnterData("//input[@id='input-firstname']",`${Data[0]}`)
    await Ent.EnterData("//input[@id='input-lastname']",`${Data[1]}`)
    await Ent.EnterData("//input[@id='input-email']",`${Data[2]}`)
    await Ent.EnterData("//input[@id='input-telephone']",`${Data[3]}`)
    await Ent.EnterData("//input[@id='input-password']",`${Data[4]}`)
    await Ent.EnterData("//input[@id='input-confirm']",`${Data[5]}`)
    await Ent.ClickOn("//label[contains(.,'No')]")
    await Ent.ClickOn("//label[@for='input-agree']")
    //Finalizar registro
    await Ent.ClickOn("//input[contains(@value,'Continue')]")
    //await Ent.ClickOn("//a[@class='btn btn-primary']")
    await page.waitForTimeout(time)

    page.close()
}
);











