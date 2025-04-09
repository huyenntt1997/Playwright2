import { getBaseUrl } from '../config/baseUrls';
import { loginPostPageUI} from '../interfaces/loginPostPageUI';
import { Page } from '@playwright/test';
import { registerPageUI } from '../interfaces/registerPageUI';
export class registerActions {
    constructor(private page: Page) {
        this.page = page;
    }
    async navigateRegister() {
        const url = getBaseUrl() + '/customer/account/create/';
        await this.page.goto(url);

    }
    async enterFirstName(firstname: string) {
        await this.page.fill(registerPageUI.firstNameTextbox, firstname);
    }
    async enterLastName(lastname: string) {
        await this.page.fill(registerPageUI.lastNameTextbox, lastname);
    }
    async enterEmail(email: string) {
        await this.page.fill(registerPageUI.emailTextbox, email);
    }
    async enterPassword(password: string) {
        await this.page.fill(registerPageUI.passwordTextbox, password);
    }

    async enterConfirmPassword(password: string) {
        await this.page.fill(registerPageUI.confirmPasswordTextbox, password);
    }
    async clickRegister() {
        await this.page.click(registerPageUI.registerButton);
}
async RegisterActions(firstname: string, lastname: string, email: string, password: string ){
    await this.navigateRegister();
    await this.enterFirstName(firstname);
    await this.enterLastName(lastname);
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.enterConfirmPassword(password);
    await this.clickRegister();
} 
}