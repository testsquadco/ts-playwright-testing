import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { APIClient } from '../core/APIClient';
import { DataLoader } from '../utils/DataLoader';

const testData = DataLoader.loadJSON('test-data/users.json');

test.describe('Example Test Suite', () => {
    test('should login successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const { email, password } = testData.validUser;
        await loginPage.login(email, password);
        await expect(page).toHaveURL('/dashboard');
    });

    test('should verify API response', async ({ request }) => {
        const apiClient = new APIClient(request);
        const response = await apiClient.get('/api/users');
        expect(response.ok()).toBeTruthy();
        expect(await response.json()).toHaveProperty('data');
    });

    // Web Test
    test('web test example', async ({ page }) => {
        await page.goto('https://example.com');
        await expect(page.locator('h1')).toHaveText('Example Domain');
    });

    // API Test
    test('api test example', async ({ request }) => {
        const response = await request.get('https://api.example.com/users');
        expect(response.ok()).toBeTruthy();
        const body = await response.json();
        expect(body).toHaveProperty('users');
    });
}); 