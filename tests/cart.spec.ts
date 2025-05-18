import { test, expect } from '@playwright/test';
import { CartActions } from '../pageObject/cart.action';
import users from '../fixtures/users.json'; // import JSON trực tiếp
import { login } from '../utils/Loginhelpers';
import { moveToCart } from '../utils/HomeHelper';
import { HomeActions } from '../pageObject/home.action';
test('Check funcion cart', async ({ page }) => {
    const cartPage = new CartActions(page);
    await test.step('Move Cart', async () => {
        const { username, password } = users.validUser;
        await login(page, username, password);
        const home = new HomeActions(page);
        await home.clickAddToCartbutton();
        home.clickShopbutton();

    });


    await test.step('Check UI Cart', async () => {
        await cartPage.assertaboutTitle();
        await cartPage.assertNameProduct();
    });

    await test.step('Continue Shopping', async () => {
        await cartPage.continueButton();
        const home = new HomeActions(page);
        home.clickShopbutton();
        
    })

    await test.step('Check Delete Product', async () => {
        await cartPage.removebutton();
    })
    await test.step('Check Checkout button', async () => {
        await cartPage.checkoutButton();
    })
});