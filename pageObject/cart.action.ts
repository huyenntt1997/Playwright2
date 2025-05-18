import { expect, Page } from '@playwright/test';
import { cartPageUI } from '../interfaces/cartPageUI';
import { getBaseUrl } from '../config/baseUrls';

export class CartActions {
    constructor(private page: Page) {
        this.page = page;
    }

    async navigateCart() {
        const url = getBaseUrl() + "cart.html";
        await this.page.goto(url);
    }

    async assertaboutTitle() {
        await expect(this.page.locator(cartPageUI.aboutTitle)).toBeVisible();
    }

    async assertNameProduct() {
        await expect(this.page.locator(cartPageUI.NameProduct)).toBeVisible();
    }
   
    async removebutton() {
        await this.page.click(cartPageUI.removeButton);
    }
    async continueButton() {
        await this.page.click(cartPageUI.continueButton);
        
    }
    async checkoutButton() {
        await this.page.click(cartPageUI.checkoutButton);
    }
}
