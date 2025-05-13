import { test } from '@playwright/test';
import { LoginPostActions} from '../pageObject/loginPost.actions';
test.describe('Vefiry submit', () => {
    test('Vefify acttion successfully', async ({ page }) => {
    const createPostPage = new LoginPostActions(page);
    await createPostPage.clickSendAnyway();
    })
});