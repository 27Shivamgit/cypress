const { defineConfig } = require("cypress");



module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  reporter: 'cypress-mochawesome-reporter',
  nonGlobalStepDefinitions: false,
  step_definitions: './cypress/e2e/login/',


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
      //require('cypress-mochawesome-reporter/plugin')(on);
      return require('./cypress/plugins/index.js')(on, config);
      
    },
    // User added
    specPattern: 'cypress/integration/**/*.feature',
    supportFile:false
  },
  
});
