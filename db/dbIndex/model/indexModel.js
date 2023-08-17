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

//3、创建数据模型

const ListData = sqllize.define('jz_index_list',{
    id:{
        type:Sequelize.NUMBER, //数据类型
        primaryKey:true,  //主键
        field:'id'
    },
    title:{
        type:Sequelize.STRING,
        field:'title',
    },
    typeImg:{
        type:Sequelize.STRING,
        field:'typeImg',
    },
    date:{
        type:Sequelize.STRING,
        field:'date',
    },
    money:{
        type:Sequelize.STRING,
        field:'money',
    }
},{
    tableName: 'jz_index_list',
    timestamps:false
})
module.exports = ListData;