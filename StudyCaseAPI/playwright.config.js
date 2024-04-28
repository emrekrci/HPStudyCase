// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './playwright/specs',
  use: {
    baseURL: 'https://generator.swagger.io/api',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    extraHTTPHeaders : {
      'Accept'  : 'application/json',
    }
  },
});

