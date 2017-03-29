var express = require("express");
var crypto = require("crypto");//加密模块
var User = require("../models/user");

var router = express.Router();

//首页
router.get("/index", function(req, res, next) {
  res.render("index", {
      title: "冰与火之歌"
  });
});

router.get("/u/:user", function(req, res, next) {

});

router.post("/post", function(req, res, next) {

});

//注册页面
router.get("/reg", function(req, res, next) {
    res.render("reg");
});
//注册请求
router.post("/reg", function(req, res, next) {
    if(req.body["password"] != req.body["password-repeat"]){
        console.log("两次密码输入不一致", req.body["password"], req.body["password-repeat"]);
        return res.redirect("/reg");
    }
    console.log("我要坚强的执行下去");
    //
    var newUser = new User({
        name: req.body["username"],
        pwd: req.body["password"]
    });
    try{
        newUser.save();
    }catch(e){
        console.log(e);
        res.render("error", {error: e});
    }
    //登录
    res.render("login");
});
router.get("/login", function(req, res, next) {
    res.render("login");
});
router.post("/login", function(req, res, next) {
    res.render("home");
});
router.get("/logout", function(req, res, next) {

});

module.exports = router;
