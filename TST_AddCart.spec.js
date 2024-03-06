const {test, espect} = require ("@playwright/test")
const {ADD} = require ("./AddCart")

let WebUrl = "https://ecommerce-playground.lambdatest.io/index.php?route=common/home"
var time = 1500

test.beforeEach(async ({page})=> {
    const LogAdd = new ADD (page)
    //Abrir URL
    await LogAdd.Openurl(WebUrl)
    //Seleccionar una opcion del Menu
    await LogAdd.MouseHover("//span[contains(text(),'Mega Menu')]")
    await LogAdd.MouseHover("//a[contains(text(),'Smart Watch')]")
    await LogAdd.ClickOn("//a[contains(text(),'Smart Watch')]")

    await page.waitForTimeout(time)
})

test("Agregar Productos al Carrito", async({page}) => {
    const AddCart1 = new ADD (page)
    //Agregar producto al carrito
    await AddCart1.ClickOn("//a[contains(text(),'iPod Touch')]")
    await AddCart1.ClickOn("(//button[contains(.,'Add to Cart')])[2]")
    //await page.goBack();
    //Seleccionar otra opcion del Menu
    await AddCart1.MouseHover("//span[contains(text(),'Mega Menu')]")
    await AddCart1.MouseHover("//a[contains(text(),'Apple Macbook')]")
    await AddCart1.ClickOn("//a[contains(text(),'Apple Macbook')]")
    //Agregar producto al carrito
    await AddCart1.ClickOn("//a[contains(text(),'iPod Shuffle')]")
    await AddCart1.ClickOn("(//button[contains(.,'Add to Cart')])[2]")
    //Agregar producto al carrito
    await AddCart1.MouseHover("//span[contains(text(),'Mega Menu')]")
    await AddCart1.MouseHover("//a[@class='nav-link icon-left text'][contains(text(),'Printer')]")
    await AddCart1.ClickOn("//a[@class='nav-link icon-left text'][contains(text(),'Printer')]")
    //ir a la pagina 3
    await AddCart1.ClickOn("//span[@class='page-link']")
    //Agregar producto al carrito
    await AddCart1.ClickOn("(//a[contains(.,'Canon EOS 5D')])[1]")
    await AddCart1.ClickOn("(//button[contains(.,'Add to Cart')])[2]")

    //ir al carrito
    await AddCart1.ClickOn("//div[@id='entry_217825']//a[@class='cart text-reset text-decoration-none no-title']//div[@class='cart-icon']")
    //Ir al Checkout
    await AddCart1.ClickOn("//a[contains(.,'Checkout')]")

    await page.waitForTimeout(time)

    await page.close()
    
})