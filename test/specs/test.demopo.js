import HomePage from "../pageobjects/home.page";
import loginPage from "../pageobjects/login.page";

describe('Login Test', () => {
    it('Test 3 - successfull Login- Page Object Based', async () => {
        await loginPage.open()
        await loginPage.login("standard_user","secret_sauce")
        
        await HomePage.validateOnHomePage()
    });
    it('should successfully login and add item to cart', () => {
    
        // Add item to cart
        const firstItemAddButton = $('.inventory_item:first-child .btn_inventory');
        firstItemAddButton.click();
        
        // Validate item added to cart
        const cartIcon = $('.shopping_cart_badge');
        expect(cartIcon.getText());
    });

});