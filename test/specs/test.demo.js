describe('Test Saucedemo', () => {
    it('Test 1 - Login Successfully', async () => {
        await browser.url("https://www.saucedemo.com/")

        const usernameTextbox = await browser.$("#user-name")
        const passwrodTextbox = await browser.$("#password")
        const loginButton = await browser.$('//input[@type="submit"]')

        await usernameTextbox.addValue("standard_user")
        await passwrodTextbox .addValue("secret_sauce")
        await loginButton.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')  
        await expect(browser).toHaveTitle('Swag Labs')

    });
    it('Test 2 - Login With Wrong Password', async() => {
        await browser.url("https://www.saucedemo.com/")

        const usernameTextbox = await browser.$("#user-name")
        const passwrodTextbox = await browser.$("#password")
        const loginButton = await browser.$('//input[@type="submit"]')

        await usernameTextbox.addValue("standard_user")
        await passwrodTextbox .addValue("wrong password")
        await loginButton.click()

        const ErroMessegeBox = await browser.$('//*[@id="login_button_container"]/div/form/div[3]/h3')
        await expect(ErroMessegeBox).toContain("Epic sadface: Sorry, this user has been locked out.")
    });
});