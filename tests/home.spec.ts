import { test } from '@playwright/test';
import { LoginActions } from '../pageObject/login.actions';
import users from '../fixtures/users.json'; 
import { HomeActions } from '../pageObject/home.action';
test.describe('Vefify HomePage', () => {
    test('Verify Logo', async ({ page }) => {
        const loginPage = new LoginActions(page);
        const { username, password } = users.validUser;

        await loginPage.loginAction(username, password);

        const Homepage = new HomeActions(page);
        await Homepage.assertLogo();

    });

    test('Verify List hamburger', async ({ page }) => {

        const Homepage = new HomeActions(page);
        await Homepage.assertLogo();

    });

    test('Verify Text Product', async ({ page }) => {

        const Homepage = new HomeActions(page);
        await Homepage.assertproductText();

    });

    test('Verify list humberger', async ({ page }) => {
        const Homepage = new HomeActions(page);
        await Homepage.assertListHumberger();

    })
})