const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern : '**/*.spec.js',
    baseUrl: "https://www.hepsiburada.com",
    chromeWebSecurity : false,
  },
});
