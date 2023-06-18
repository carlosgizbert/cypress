const { defineConfig } = require("cypress")

module.exports = defineConfig({
  projectId: "r9258b",
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {},
  },
})
