module.exports = {
  publicPath: './',
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/assets/scss/abstracts/variables.scss";
          @import "~@/assets/scss/abstracts/mixins.scss";
        `,
      },
    },
  },
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'AC - Search amazing things',
    },
  },
};
