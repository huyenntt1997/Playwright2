import { expect, Page } from '@playwright/test';
import { getBaseUrl } from '../config/baseUrls';
import { HomePageUI } from '../interfaces/HomePageUI';

export class HomeActions {
    constructor(private page: Page) {
        this.page = page;
    }

    async navigateHomepage() {
        const url = getBaseUrl();
        await this.page.goto(url);
      }

      async clickProfileButton() {
              await this.page.click(HomePageUI.profileButton);
            }

            async clickLogoutButton() {
                await this.page.click(HomePageUI.logoutButton);
              }

              async logoutAccout() {
                await this.navigateHomepage();
                await this.clickProfileButton();
                await this.clickLogoutButton();
              }
    }