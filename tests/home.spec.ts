import { test, expect } from '@playwright/test';
import { LoginActions } from '../pageObject/login.actions';
import users from '../fixtures/users.json';
import { HomeActions } from '../pageObject/home.action';
import { login } from '../utils/Loginhelpers';

test('Vefify HomePage', async ({ page }) => {
  const { username, password } = users.validUser;
  await login(page, username, password);

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
    const { username, password } = users.validUser;
    await login(page, username, password);
    await home.assertShopbutton();
    await home.clickShopbutton();
    await page.goBack();
  });

  await test.step('Check list product', async () => {
  await home.assertProductListCount(6);
  });

  await test.step('Add to Cart', async () => {
    await home.clickAddToCartbutton();
    await home.assertCartbuttonVisible();
  });

  await test.step('Remove to Cart', async () => {
    await home.clickRemoveToCardbutton();
    await home.assertCartbuttonInvisible();
  });


})