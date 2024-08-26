const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // User added
    specPattern: 'cypress/integration/examples/*.js'
    
  },
});
