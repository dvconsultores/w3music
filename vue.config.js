module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack:{
    performance: {
      hints: false
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 500000,
      }
    }
},
  publicPath: '/'
}
