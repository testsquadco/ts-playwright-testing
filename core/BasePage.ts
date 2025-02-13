import { Page } from '@playwright/test';

export class BasePage {
    constructor(protected page: Page) {}

    async navigate(path: string) {
        await this.page.goto(path);
    }

    async waitForElement(selector: string, timeout = 5000) {
        return await this.page.waitForSelector(selector, { timeout });
    }

    async click(selector: string) {
        await this.waitForElement(selector);
        await this.page.click(selector);
    }

    async fill(selector: string, value: string) {
        await this.waitForElement(selector);
        await this.page.fill(selector, value);
    }

    async getText(selector: string) {
        await this.waitForElement(selector);
        return await this.page.textContent(selector);
    }
} 