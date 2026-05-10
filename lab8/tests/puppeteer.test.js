import puppeteer from 'puppeteer';

jest.setTimeout(30000);

describe('Puppeteer Comparison Test', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({ headless: "new" });
        page = await browser.newPage();
    });

    afterAll(async () => {
        await browser.close();
    });

    test('Should login and check inventory page', async () => {
        await page.goto('https://www.saucedemo.com/');
        
        // Взаємодія з елементами
        await page.type('#user-name', 'standard_user');
        await page.type('#password', 'secret_sauce');
        await page.click('#login-button');

        // Очікування результату
        await page.waitForSelector('.inventory_list');
        const url = await page.url();
        
        expect(url).toContain('inventory.html');
    });
});