/*
 * @Author: Tmier
 * @Date: 2020-08-04 09:59:51
 * @LastEditTime: 2020-08-04 10:38:53
 * @Description: 
 */
const Mock = require('mockjs')
const util = require('./util')
module.exports = function(app) {
    app.get('/user/userinfo',function(req,res) {
        // 每次响应式读取mock data的json文件
        // util.getJsonFile方法定义了如何读取json文件并解析成数据对象
        /**
         * @description: 
         * @param {type} 
         * @return {type} 
         */        
        var json = util.getJsonFile('./userInfo.json')
        // 将json传入Mock.mock方法,生成的数据返回给浏览器
        res.json(Mock.mock(json))
    })
    app.get('/user/myinfo',function(req,res) {
        // 每次响应式读取mock data的json文件
        // util.getJsonFile方法定义了如何读取json文件并解析成数据对象
        /**
         * @description: 
         * @param {type} 
         * @return {type} 
         */        
        var json = util.getJsonFile('./userInfo.json')
        // 将json传入Mock.mock方法,生成的数据返回给浏览器
        res.json(Mock.mock(json))
    })
}