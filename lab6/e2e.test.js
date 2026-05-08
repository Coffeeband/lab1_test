import puppeteer from 'puppeteer';

describe('E2E User Scenarios - SauceDemo', () => {
    let browser;
    let page;

    jest.setTimeout(40000); // E2E тести довгі, ставимо більший таймаут

    beforeAll(async () => {
        browser = await puppeteer.launch({ headless: "new" });
        page = await browser.newPage();
    });

    afterAll(async () => {
        await browser.close();
    });

    // Сценарій 1: Повний цикл покупки
    test('Scenario 1: Complete purchase flow', async () => {
        await page.goto('https://www.saucedemo.com/');

        // 1. Авторизація
        await page.type('#user-name', 'standard_user');
        await page.type('#password', 'secret_sauce');
        await page.click('#login-button');
        await page.waitForSelector('.inventory_list');

        // 2. Додавання товару
        await page.click('#add-to-cart-sauce-labs-backpack');
        
        // 3. Перехід в кошик
        await page.click('.shopping_cart_link');
        await page.waitForSelector('.cart_list');

        // 4. Оформлення (Checkout)
        await page.click('#checkout');
        await page.waitForSelector('#first-name');
        await page.type('#first-name', 'Sashko');
        await page.type('#last-name', 'Tester');
        await page.type('#postal-code', '12345');
        await page.click('#continue');

        // 5. Фіналізація
        await page.waitForSelector('#finish');
        await page.click('#finish');

        // Перевірка результату
        const successText = await page.$eval('.complete-header', el => el.textContent);
        expect(successText).toBe('Thank you for your order!');
    });

    // Сценарій 2: Сортування за ціною
    test('Scenario 2: Sort products by price (low to high)', async () => {
        await page.goto('https://www.saucedemo.com/');
        // Логін (якщо сесія не зберіглася)
        await page.type('#user-name', 'standard_user');
        await page.type('#password', 'secret_sauce');
        await page.click('#login-button');

        // Зміна сортування
        await page.select('.product_sort_container', 'lohi');

        // Перевірка ціни першого товару
        const firstPrice = await page.$eval('.inventory_item_price', el => el.textContent);
        expect(firstPrice).toBe('$7.99');
    });
});