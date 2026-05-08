import puppeteer from 'puppeteer';

describe('UI Testing with Puppeteer - Login Page', () => {
    let browser;
    let page;

    jest.setTimeout(30000);

    beforeAll(async () => {
        browser = await puppeteer.launch({ headless: "new" });
        page = await browser.newPage();
    });

    afterAll(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        await page.goto('https://the-internet.herokuapp.com/login');
    });

    test('Should have the correct page title', async () => {
        const title = await page.title();
        expect(title).toBe('The Internet');
    });

    test('Should display login form', async () => {
        const form = await page.$('#login');
        expect(form).not.toBeNull();
    });

    test('Should have H2 Login Page', async () => {
        const h2 = await page.$eval('h2', el => el.textContent);
        expect(h2).toBe('Login Page');
    });

    test('Login button should be visible', async () => {
        const button = await page.$('button[type="submit"]');
        expect(button).not.toBeNull();
    });

    test('Should allow typing in username field', async () => {
        await page.type('#username', 'tomsmith');
        const usernameValue = await page.$eval('#username', el => el.value);
        expect(usernameValue).toBe('tomsmith');
    });
});