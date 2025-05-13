import { expect, Page } from '@playwright/test';
import { getBaseUrl } from '../config/baseUrls';
import { HomePageUI } from '../interfaces/HomePageUI';

export class HomeActions {
  constructor(private page: Page) {
    this.page = page;
  }

  async navigateHomepage() {
    const url = getBaseUrl() + "inventory.html";
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

  async assertListHumberger() {
    await expect(this.page.locator(HomePageUI.allItemButton)).toHaveText('All Items');
    await expect(this.page.locator(HomePageUI.aboutButton)).toHaveText('About');
    await expect(this.page.locator(HomePageUI.logoutButton)).toHaveText('Logout');
    await expect(this.page.locator(HomePageUI.resetAppStateButton)).toHaveText('Reset App State');
  }
}