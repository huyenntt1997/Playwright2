import { LoginPageUI } from '../interfaces/LoginPageUI';
import { expect, Page } from '@playwright/test';
import { getBaseUrl } from '../config/baseUrls';


export class LoginActions {
    constructor(private page: Page) {
        this.page = page;
    }

    async navigateLogin() {
        const url = getBaseUrl();
        await this.page.goto(url);
      }

      async enterUsername(username: string) {
        await this.page.fill(LoginPageUI.usernameInput, username);
      }

      async enterPassword(password: string) {
        await this.page.fill(LoginPageUI.passwordInput, password);
      }

      async clickLogin() {
        await this.page.click(LoginPageUI.loginButton);
      }

      async loginAction(username: string, password: string) {
        await this.navigateLogin();
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
      }

      async errorRegisterMessage() {
        await expect(this.page.locator(LoginPageUI.registerErrorText)).toBeVisible();

      } 

}