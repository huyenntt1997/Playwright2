import { test } from '@playwright/test';
import { LoginActions } from '../pageObject/login.actions';
import users from '../fixtures/users.json'; // import JSON trực tiếp
import { HomeActions } from '../pageObject/home.action';

test.describe('Login Functionality', () => {
  test('Login successfully', async ({ page }) => {
    const loginPage = new LoginActions(page);
    const { username, password } = users.validUser;

    await loginPage.loginAction(username, password);

    const Homepage = new HomeActions(page);
    await Homepage.assertLogo();
    await Homepage.logoutAccount();
  });

  
  test('Login fail', async ({ page }) => {
    const loginPage = new LoginActions(page);
    const { username, password } = users.invalidUser;

    await loginPage.loginAction(username, password);

    await loginPage.errorRegisterMessage();
    

  });
});