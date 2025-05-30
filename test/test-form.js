const {By, Builder, Browser, Select} = require('selenium-webdriver');

(async function test() {
    let driver;

    try {
        //Creación de una instancia del navedor (Google Chrome)
        driver = await new Builder().forBrowser(Browser.CHROME).build();  
        
        //Navegación 
        await driver.get('https://www.selenium.dev/selenium/web/web-form.html');     
        
        //Agrupación lógica de elementos:
        //Inputs básicos
        let textInput = await driver.findElement(By.name('my-text'));
        let password = await driver.findElement(By.name('my-password'));
        let textArea = await driver.findElement(By.name('my-textarea'));
        
        //Componentes complejos
        let dropdownSelect = await driver.findElement(By.name('my-select'));
        let select = new Select(dropdownSelect);
        let dropdownDatalist = await driver.findElement(By.name('my-datalist'));
        let datePicker = await driver.findElement(By.name('my-date'));
        
        //Botón 
        let submitButton = await driver.findElement(By.css('button'));
        
        //Agrupación de interacciones por propósito:
        //Rellenar campos de texto
        await textInput.sendKeys('Hola Mundo!');
        await password.sendKeys('12345');
        await textArea.sendKeys('Este es mi primer script de Selenium');

        //Seleccionar opciones
        await select.selectByVisibleText('One');
        await dropdownDatalist.click();
        await dropdownDatalist.sendKeys('New York');
        
        //Seleccionar fecha
        await datePicker.click();
        await datePicker.sendKeys('05/01/2025');

        //Envío de formulario
        await submitButton.click();
    } catch (e) {
        console.log(e);
    } finally {
        await driver.quit();
    }
}())