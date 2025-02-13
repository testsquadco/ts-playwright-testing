import { BasePage } from '../core/BasePage';

export class LoginPage extends BasePage {
    // Selectors
    private readonly emailInput = '#email';
    private readonly passwordInput = '#password';
    private readonly loginButton = '#login-button';

    async login(email: string, password: string) {
        await this.fill(this.emailInput, email);
        await this.fill(this.passwordInput, password);
        await this.click(this.loginButton);
    }
} 