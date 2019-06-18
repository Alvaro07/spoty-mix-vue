module.exports = {
  publicPath: "https://alvaro07.github.io/spoty-mix-vue",
  css: {
    loaderOptions: {
      sass: {
        data: `
        @import "@/styles/settings/_variables.scss";
        @import "@/styles/settings/_mixins.scss";
      `
      }
    }
  }
};
