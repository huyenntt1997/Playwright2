import { test, expect } from '@playwright/test';
import { LoginActions } from '../pageObject/login.actions';
import users from '../fixtures/users.json';
import { HomeActions } from '../pageObject/home.action';
import { getUrlAbout } from '../config/baseUrls';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginActions(page);
  const { username, password } = users.validUser;
  await loginPage.loginAction(username, password);
});
test('Vefify HomePage', async ({ page }) => {
  const home = new HomeActions(page);

  await test.step('Check title', async () => {
    await home.assertLogo();
  });

  await test.step('Check UI menu', async () => {
    await home.assertListHumberger();
  });

  await test.step('Check click "All Items"', async () => {
    await home.clickAllItemButton();
    const expectedUrl = home.getHomepageUrl();
    await expect(page).toHaveURL(expectedUrl);

  });

  await test.step('Check click "About"', async () => {
    await home.clickAboutButton;

  });

  await test.step('Check click "Logout"', async () => {
    await home.logoutAccount();
    await home.assertLoginButton();

  });

  await test.step('Check button "Shop"', async () => {

    const loginPage = new LoginActions(page);
    const { username, password } = users.validUser;
    await loginPage.loginAction(username, password);
    await home.assertShopbutton();
    await home.clickShopbutton();
    await page.goBack();
  });

  await test.step('Check list product', async () => {
  await home.assertProductListCount(6);
  });
})