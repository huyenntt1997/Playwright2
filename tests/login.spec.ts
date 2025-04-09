import { test } from '@playwright/test';
import { LoginActions } from '../pageObject/login.actions';
import users from '../fixtures/users.json'; // import JSON trực tiếp
import { LoginPostActions } from '../pageObject/loginPost.actions';
import { HomeActions } from '../pageObject/home.action';

test.describe('Login Functionality', () => {
  test('Login successfully', async ({ page }) => {
    const loginPage = new LoginActions(page);
    const { email, password } = users.validUser;

    await loginPage.loginAction(email, password);

    const loginPostPage = new LoginPostActions(page);
    await loginPostPage.clickSendAnyway();

    const Homepage = new HomeActions(page);
    await Homepage.clickLogoutButton();
  });

  
  test('Login fail', async ({ page }) => {
    const loginPage = new LoginActions(page);
    const { email, password } = users.invalidUser;

    await loginPage.loginAction(email, password);

    const loginPostPage = new LoginPostActions(page);
    await loginPostPage.clickSendAnyway();

    await loginPage.errorRegisterMessage();
    

  });
});