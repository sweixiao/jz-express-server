var express = require("express");
var router = express.Router();
import { setJzData,getIndxList } from "../db/dbIndex/index";

/* GET home page. */
router.post("/setList", async (req, res, next) => {
  let {code,data} = await setJzData(req.body);
  if (code === 200) {
    res.send({
      code,
      data,
    });
  }
});
/* GET home page. */
router.get("/index/getList", async (req, res, next) => {
  let {code,data} = await getIndxList(req.body);
  console.log(data,111)
  if (code === 200) {
    res.send({
      code,
      data,
    });
  }
});















router.get("/", (req, res) => {
  res.send("get");
});
// post请求
router.post("/", (req, res) => {
  res.send("post");
});

// 监听客户端的get请求
router.get("/user", (req, res) => {
  // 调用express调用的res.send()方法
  res.send({
    name: "zs",
    age: 20,
    gender: "男",
  });
});

// :id是一个动态的参数
router.get("/infor/:id/:name", (req, res) => {
  // req.params获取到动态匹配到的参数
  console.log(req.params);
  res.send(req.params);
});

module.exports = router;
