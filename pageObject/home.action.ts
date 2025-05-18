import { expect, Page } from '@playwright/test';
import { getBaseUrl } from '../config/baseUrls';
import { HomePageUI } from '../interfaces/HomePageUI';
import { LoginPageUI } from '../interfaces/LoginPageUI';

export class HomeActions {
  constructor(private page: Page) {
    //this.page = page;
  }


  getHomepageUrl() {
    return getBaseUrl() + "inventory.html";
  }

  async navigateHomepage() {
    const url = this.getHomepageUrl();
    await this.page.goto(url);
  }

  async clickHamburgerButton() {
    await this.page.click(HomePageUI.hamburgerButton);
  }

  async clickAllItemButton() {
    await this.page.click(HomePageUI.allItemButton);
  }

  async clickAboutButton() {
    await this.page.click(HomePageUI.aboutButton);
  }

  async clickLogoutButton() {
    await this.page.click(HomePageUI.logoutButton);
  }

  async clickResetAppStateButton() {
    await this.page.click(HomePageUI.resetAppStateButton);
  }

  async assertLogo() {
    await expect(this.page.locator(HomePageUI.logoApp)).toBeVisible();
  }

  async assertproductText() {
    await expect(this.page.locator(HomePageUI.productText)).toBeVisible();
  }

  async logoutAccount() {
    await this.navigateHomepage();
    await this.clickHamburgerButton();
    await this.clickLogoutButton();
  }
  async assertLoginButton() {
    await expect(this.page.locator(LoginPageUI.loginButton)).toBeVisible();
  }

  async assertListHumberger() {
    await this.clickHamburgerButton();
    await expect(this.page.locator(HomePageUI.allItemButton)).toHaveText('All Items');
    await expect(this.page.locator(HomePageUI.aboutButton)).toHaveText('About');
    await expect(this.page.locator(HomePageUI.logoutButton)).toHaveText('Logout');
    await expect(this.page.locator(HomePageUI.resetAppStateButton)).toHaveText('Reset App State');
  }
  async assertShopbutton() {
    await expect(this.page.locator(HomePageUI.shopButton)).toBeVisible();
  }
  async clickShopbutton() {
  await this.page.waitForSelector(HomePageUI.shopButton, { state: 'visible', timeout: 5000  });
  await this.page.click(HomePageUI.shopButton);
  }
  async assertProductListCount(expectedCount: number) {
    const productItems = this.page.locator(HomePageUI.productItems);
    await expect(productItems).toHaveCount(expectedCount);
  }
  async clickAddToCartbutton() {
    await this.page.click(HomePageUI.addToCartButton);

  }
  async assertCartbuttonVisible() {
    await expect(this.page.locator(HomePageUI.badgeIcon)).toBeVisible();
  }
  async clickRemoveToCardbutton() {
    await this.page.click(HomePageUI.removeButton);

  }

  async assertCartbuttonInvisible() {
      await expect(this.page.locator(HomePageUI.badgeIcon)).toBeHidden();
    }

    async clickAdd() {
      await this.page.click(HomePageUI.addToCartButton);
      await this.page.click(HomePageUI.shopButton);
    }
  }