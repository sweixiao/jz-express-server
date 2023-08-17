//1、导入squelize模块
const Sequelize = require('sequelize')
//2、配置数据库连接对象
const sqllize =new Sequelize('jzserver','root','123456',{
    host:'localhost',
    post:3306,
    dialect:'mysql',
    pool:{  //数据库连接池
        max:10,
        min:3,
        idle:10000
    }
})

//3、导出数据库的配置对象
module.exports = sqllize