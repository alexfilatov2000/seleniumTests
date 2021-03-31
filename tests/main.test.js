const {Builder, By, Key, until} = require('selenium-webdriver');

describe('Testing shop',  () => {

    let driver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
    })

    afterAll(async () => {
        await driver.quit();
    });

    it('Check for register', async () => {
        await driver.get('https://superareshop.com/account/login');
        await driver.findElement(By.name("customer[email]")).sendKeys("12345@gm");
        await driver.findElement(By.name("customer[password]")).sendKeys("12345");
        await driver.findElement(By.css("button[type='submit']")).click();
        // let text = await driver.findElement(By.css("p[class='Form__Alert Alert Alert--error']"));
        // console.log(text);

    }, 20000)

    it('Test for correct page', async () => {
        await driver.get('https://superareshop.com/collections/shirts');

        const el = await driver.wait(until.elementLocated(By.xpath('/html/body/div[7]/main/div[1]/section/div[1]/header/div[2]/div/h1')), 2000);
        const output =  await driver.wait(until.elementIsVisible(el), 2000);

        const outputVal = await output.getText();
        expect(outputVal).toEqual("SHIRTS");
    }, 20000)

    it('Check for search', async () => {
        await driver.get('https://superareshop.com/search');

        await driver.findElement(By.xpath('//*[@id="bc-sf-search-box-1"]')).sendKeys("qqq", Key.RETURN);

        const el = await driver.wait(until.elementLocated(By.xpath('/html/body/div[7]/main/section/section/header/div/div')), 2000);
        const output =  await driver.wait(until.elementIsVisible(el), 2000);

        const outputVal = await output.getText();

        expect(outputVal).toEqual('SEARCH' +
            '\n0 results for "qqq"');
    }, 20000)

    it('Check for Logo', async () => {
        await driver.get('https://superareshop.com/collections/clothing');
        await driver.findElement(By.css("a[class='Header__LogoLink']")).click();

    }, 20000)

    it('Check for', async () => {
        await driver.get('https://superareshop.com/collections/bags-and-accessories/products/hayabusa-ryoko-book-bag');
        await driver.findElement(By.css("button[type='submit']")).click();
        // setTimeout(async () => {
        //     await driver.findElement(By.css("button[class='remodal-confirm']")).click();
        // }, 500);
        //
        //
        // const el = await driver.wait(until.elementLocated(By.css('span[class="price"]')), 2000);
        // const output =  await driver.wait(until.elementIsVisible(el), 2000);
        //
        // console.log(output);
    }, 20000)
});