import { LoginPageUI } from '../interfaces/LoginPageUI';
import { expect, Page } from '@playwright/test';
import { getBaseUrl } from '../config/baseUrls';


export class CustommerActions {
    constructor(private page: Page) {
        this.page = page;
    }

    async navigateCustommer() {
        const url = getBaseUrl() + '/customer/account/index/';
        await this.page.goto(url);
      }

      async assertTextsuccess() {
        await expect(this.page.getByText('text=Thank you for registering with Main Website Store.')).toBeVisible();
      }
    }

    