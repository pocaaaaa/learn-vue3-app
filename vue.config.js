const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  pages: {
    udSection07: {
      entry: "src/containers/udSection07/main.js",
      template: "public/index.html",
      filename: "udSection07.html",
      title: "udSection07",
    },
  },
});
