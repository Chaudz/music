var express = require("express");
var homeController = require("../controllers/home_controller");
var mymusicController = require("../controllers/mymusic_controller");
var checklogin = require("../middlewares/checklogin");
var router = express.Router();
/* GET home page. */
router.get("/", homeController.index);
router.post("/login", homeController.login);
router.get("/mymusic", checklogin, mymusicController.index);
router.get("/allmusic", mymusicController.allMusic);
router.post("/mymusic/upload", mymusicController.uploadfile);
router.post("/comment", checklogin, mymusicController.comment);
router.post("/showcomment", mymusicController.showcomment);
router.post("/upcomment", checklogin, mymusicController.upcomment);

module.exports = router;
