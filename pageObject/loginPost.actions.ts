import { getBaseUrl } from '../config/baseUrls';
import { loginPostPageUI} from '../interfaces/loginPostPageUI';
import { Page } from '@playwright/test';
export class LoginPostActions {
    constructor(private page: Page) {
        this.page = page;
    }
    async navigateLoginPost() {
        const url = getBaseUrl() + '/customer/account/loginPost/';
        await this.page.goto(url);
      }
    async sendAnyway() {
        await this.page.click(loginPostPageUI.sendAnywayButton);
      }

      async clickSendAnyway() {
        await this.navigateLoginPost();
        await this.sendAnyway();
      }
}