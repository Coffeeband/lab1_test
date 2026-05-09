export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = '#user-name';
        this.passwordInput = '#password';
        this.loginButton = '#login-button';
    }

    async login(username, password) {
        await this.page.type(this.usernameInput, username);
        await this.page.type(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }
}