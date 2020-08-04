/*
 * @Author: Tmier
 * @Date: 2020-08-04 09:59:51
 * @LastEditTime: 2020-08-04 10:03:18
 * @Description: 
 */
const Mock = require('mockjs')
const util = require('./util')
module.exports = function(app) {
    app.get('user/userinfo',function(req,res) {
        // 每次响应式读取mock data的json文件
        util.getJsonFile方法定义了如何读取json文件并解析成数据对象
    })
}