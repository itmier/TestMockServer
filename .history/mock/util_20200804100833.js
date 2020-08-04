/*
 * @Author: Tmier
 * @Date: 2020-08-04 10:00:13
 * @LastEditTime: 2020-08-04 10:08:33
 * @Description: 
 */
const fs = require('fs')
const path = require('path')

module.exports = {
    getJsonFile: function(filePath) {
        // 读取指定json文件
        var json = fs.readFileSync(path.resolve(__dirname,filePath),'utf-8')
        return JSON.parse(json)
    }
}