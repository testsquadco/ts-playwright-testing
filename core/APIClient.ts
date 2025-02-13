import { APIRequestContext } from '@playwright/test';

export class APIClient {
    constructor(private request: APIRequestContext) {}

    async get(url: string, options = {}) {
        return await this.request.get(url, {
            ...options,
            failOnStatusCode: false
        });
    }

    async post(url: string, data: any, options = {}) {
        return await this.request.post(url, {
            data,
            ...options,
            failOnStatusCode: false
        });
    }

    async put(url: string, data: any, options = {}) {
        return await this.request.put(url, {
            data,
            ...options,
            failOnStatusCode: false
        });
    }

    async delete(url: string, options = {}) {
        return await this.request.delete(url, {
            ...options,
            failOnStatusCode: false
        });
    }
} 