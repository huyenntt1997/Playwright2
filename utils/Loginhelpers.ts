import { Page } from '@playwright/test';
import { LoginActions } from '../pageObject/login.actions';

export async function login(page: Page, username: string, password: string) {
  const loginPage = new LoginActions(page);
  await loginPage.loginAction(username, password);
}