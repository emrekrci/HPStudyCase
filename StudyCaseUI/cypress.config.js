const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if(browser.family === 'chromium' && browser.name !== 'electron'){
          launchOptions.args.push("--incognito");
          return launchOptions;
        }
      })
    },
    watchForFileChanges : false,
    baseUrl: "https://www.hepsiburada.com",
    specPattern : '**/*.spec.js',
    chromeWebSecurity : false,
  },
});
