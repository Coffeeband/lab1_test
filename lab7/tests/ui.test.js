import puppeteer from 'puppeteer';
import { LoginPage } from '../src/pages/LoginPage.js';

jest.setTimeout(30000);

describe('UI Testing - SauceDemo Login', () => {
    let browser, page;

    beforeAll(async () => {
        browser = await puppeteer.launch({ headless: "new" });
        page = await browser.newPage();
    });

    afterAll(() => browser.close());

    test('Login page should have correct title', async () => {
        await page.goto('https://www.saucedemo.com/');
        expect(await page.title()).toBe('Swag Labs');
    });

    test('Login button should be visible', async () => {
        const loginPage = new LoginPage(page);
        const button = await page.$(loginPage.loginButton);
        expect(button).not.toBeNull();
    });
});