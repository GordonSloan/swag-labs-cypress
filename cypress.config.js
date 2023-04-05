const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber())
    },
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: 'https://www.saucedemo.com',
  },
});
