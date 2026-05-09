import puppeteer from 'puppeteer';
import { LoginPage } from '../src/pages/LoginPage.js';

jest.setTimeout(30000);

describe('E2E Testing - Complete Purchase', () => {
    let browser, page;

    beforeAll(async () => {
        browser = await puppeteer.launch({ headless: "new" });
        page = await browser.newPage();
    });

    afterAll(() => browser.close());

    test('Successful login and navigation to inventory', async () => {
        const loginPage = new LoginPage(page);
        await page.goto('https://www.saucedemo.com/');
        await loginPage.login('standard_user', 'secret_sauce');
        
        await page.waitForSelector('.inventory_list');
        expect(page.url()).toContain('inventory.html');
    });
});