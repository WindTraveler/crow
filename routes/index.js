var express = require("express");
var router = express.Router();

//首页
router.get("/", function(req, res, next) {
  res.render("index", {
      title: "冰与火之歌"
  });
});

router.get("/u/:user", function(req, res, next) {

});

router.post("/post", function(req, res, next) {

});
router.get("/reg", function(req, res, next) {
    res.render("reg");
});
router.post("/reg", function(req, res, next) {

});
router.get("/login", function(req, res, next) {

});
router.post("/login", function(req, res, next) {

});
router.get("/logout", function(req, res, next) {

});

module.exports = router;
