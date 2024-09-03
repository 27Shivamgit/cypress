const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  reporter: 'cypress-mochawesome-reporter',


  env: {
    url : "https://rahulshettyacademy.com"
  },
  retries: {
    runMode: 1,
    },

  projectId: "hcuzzv",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    // User added
    specPattern: 'cypress/integration/examples/*.js'
    //  specPattern: 'cypress/integration/framework/*.js'
  },
});
