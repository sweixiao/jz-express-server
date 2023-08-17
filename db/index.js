const mysql = require('mysql');
const db = mysql.createPool({
    host:'localhost',//数据库IP地址
    port:'3306',
    user:'root',
    password:'123456',
    database:'jzserver'
})
// 检测数据库是否连接成功
db.query("select 1", (err, results) => {
  if (err) return console.log(err);
  console.log(results);
});

module.exports =db;