/*
 * @Description: pool
 * @Autor: HuangCheng
 * @Date: 2020-07-06 11:32:19
 * @LastEditors: HuangCheng
 * @LastEditTime: 2020-07-07 10:15:01
 */ 

var mysql = require('mysql');
var pool = mysql.createPool({  
  host     : 'localhost',  // 主机名  
  port     : 3306, // 数据库连接的端口号 默认是3306  
  database : 'mysql', // 需要查询的数据库  
  user     : 'root', // 用户名  
  password : '', // 密码，我的密码是空。所以是空字符串  
  connectionLimit: 3000
});
module.exports = pool
