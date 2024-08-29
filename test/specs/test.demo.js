const { expect } = require('chai');

describe('Sauce Demo', function() {
    it('should login successfully', async function() {
        await browser.url('https://www.saucedemo.com');

        // Login
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();

        // Validate dashboard
        const title = await browser.getTitle();
        expect(title).to.equal('Swag Labs');
    });

    it('should add an item to the cart', async function() {
        await browser.url('https://www.saucedemo.com');

        // Login
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();

        // Add item to cart
        await $('.inventory_item').waitForDisplayed();
        const firstItemAddToCartButton = await $('.inventory_item:first-child .btn_inventory');
        await firstItemAddToCartButton.click();

        // Validate item added to cart
        const cartItemCount = await $('.shopping_cart_badge').getText();
        expect(cartItemCount).to.equal('1');
    });
});