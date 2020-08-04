/*
 * @Author: Tmier
 * @Date: 2020-08-04 09:57:16
 * @LastEditTime: 2020-08-04 10:32:37
 * @Description: 
 */
module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    hot: true,
    before: require('./mock')
  }
}
