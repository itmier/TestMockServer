module.exports = {
  lintOnSave: false,
  devServer: {
    port:9009,
    open: true,
    hot: true,
    before: require('../mock')
  }
}
