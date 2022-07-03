import { test, expect } from '@playwright/test';

test.describe('feature foo', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('http://localhost:3000/');
  });

  test('my test', async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL('http://localhost:3000/');
    await expect(page.locator('#count').first()).toHaveText('Count: 0')
    await page.click('#btnCount');
    await expect(page.locator('#count').first()).toHaveText('Count: 1')
  });
});
