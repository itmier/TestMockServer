/*
 * @Author: Tmier
 * @Date: 2020-08-04 09:57:16
 * @LastEditTime: 2020-08-04 10:27:24
 * @Description: 
 */
module.exports = {
  lintOnSave: false,
  devServer: {
    port:9009,
    open: true,
    hot: true,
    before: require('./mock')
  }
}
