// playwright.config.ts

const { defineConfig } = require('@playwright/test');

// Global configuration
const config = defineConfig({
    testDir: './tests',
    retries: process.env.CI ? 2 : 0, // 2 retries on CI, no retries locally
    timeout: 30000,
    use: {
        headless: process.env.CI ? true : false,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 0,
        ignoreHTTPSErrors: true,
    },
});

module.exports = config;