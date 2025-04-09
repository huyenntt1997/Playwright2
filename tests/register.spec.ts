import { test } from '@playwright/test';
import users from '../fixtures/users.json'; // import JSON trực tiếp
import { registerActions } from '../pageObject/register.action';
import { CustommerActions } from '../pageObject/customer.action';

test.describe('Register Functionality', () => {
  test('Register successfully', async ({ page }) => {
    const registerPage = new registerActions(page);
    const { firstname, lasttname, password } = users.validUser;
    await registerPage.RegisterActions(firstname,lasttname,email,password);
    
    const custommerPage = new CustommerActions(page);
    await custommerPage.assertTextsuccess();
  })
});