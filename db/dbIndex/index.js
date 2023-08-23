import { where } from "sequelize";
import db from "../index";
import ListData from "./model/indexModel";
import moment from "moment";
const { Op } = require("sequelize");
// 选择：select * from table1 where 范围
// 插入：insert into table1(field1,field2) values(value1,value2)
// 删除：delete from table1 where 范围
// 更新：update table1 set field1=value1 where 范围
// 查找：select * from table1 where field1 like ’%value1%’ ---like的语法很精妙，查资料!
// 排序：select * from table1 order by field1,field2 [desc]
// 总数：select count as totalcount from table1
// 求和：select sum(field1) as sumvalue from table1
// 平均：select avg(field1) as avgvalue from table1
// 最大：select max(field1) as maxvalue from table1
// 最小：select min(field1) as minvalue from table1

export const setJzData = async (params) => {
  let code = 200;
  let data = null;
  let message = "";
  try {
    let list = await ListData.create(params);
    data = await list.save();
  } catch (err) {
    code = 500;
    message = "请求失败";
  }

  return {
    code,
    data,
    message,
  };
};

export const getIndxList = async (params) => {
  let code = 200;
  let data = null;
  let message = "";
  try {
    data = await ListData.findAll({
      where: {
        date: {
          [Op.gte]: params.month,
          [Op.lt]: moment(params.month).add(1, "months").format("YYYY-MM"),
        },
      },
    });
  } catch (err) {
    code = 500;
    message = "请求失败";
  }

  return {
    code,
    data,
    message,
  };
};

export const getMonthDetailList = async (params) => {
  let code = 200;
  let data =[];
  let message = "";
  try {
   let list = await ListData.findAll({
      where: {
        date: {
          [Op.gte]: params.month,
          [Op.lt]: moment(params.month).add(1, "months").format("YYYY-MM"),
        },
      },
    });
    for (let i = 0; i < params.monthDay; i++) {
      data.push({
        day: i + 1,
        dayList: [],
      });
      for (let j = 0; j < list.length; j++) {
        if (i + 1 == moment(list[j].date).date()) {
          data[i].dayList.push(list[j]);
        }
      }
    }
  } catch (err) {
    code = 500;
    message = "请求失败";
  }

  return {
    code,
    data,
    message,
  };
};
