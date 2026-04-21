// fixtures.ts

import { test as base } from '@playwright/test';

export const test = base.extend({
    // Add custom fixtures here if needed
    customFixture: async ({}, use) => {
        // Setup
        const data = 'test data';
        
        // Use fixture
        await use(data);
        
        // Teardown
    },
});
