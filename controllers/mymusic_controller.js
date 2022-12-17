var Audio = require("../models/uploadaudio");
var User = require("../models/user");
var Comment = require("../models/commentModel");
var jwt = require("jsonwebtoken");
const multer = require("multer");
var Storage = multer.diskStorage({
  destination: "public/uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
var upload = multer({
  storage: Storage,
}).single("testAudio");
// function index
async function index(req, res, next) {
  res.render("canhan");
}

async function allMusic(req, res) {
  var music = await Audio.find({});
  res.json(music);
}
// function up audio
async function uploadfile(req, res, next) {
  upload(req, res, (err) => {
    if (err) {
    } else {
      const newAudio = new Audio({
        name: req.file.originalname,
        desc: req.body.desc,
        musicdata: {
          data: req.file.filename,
          contentType: "audio/mp3",
        },
      });
      newAudio
        .save()
        .then(() => {
          // console.log(req.file.originalname);
          res.send("successfully uploaded ");
        })
        .catch((err) => {
          // console.log("alllo");
          // console.log("loikia", err);
        });
    }
  });
}
async function comment(req, res) {
  var idSong = req.body.songid;
  var comment = await Comment.find({ songId: idSong });
  var data = jwt.verify(req.cookies.token, "mk");
  try {
    var user = await User.findOne({ _id: data._id });
  } catch (error) {
    console.log("loi");
  }
  res.json({ massage: "success", comment: comment });
}
async function showcomment(req, res) {
  var idSong = req.body.songid;
  var comment = await Comment.find({ songId: idSong });
  res.json({ massage: "success", comment: comment });
}
async function upcomment(req, res) {
  var data = jwt.verify(req.cookies.token, "mk");
  const newCommnet = new Comment({
    text: req.body.comment,
    userId: data._id,
    songId: req.body.songid,
  });
  newCommnet.save();
  // var user = await Comment.findOne({});
  res.json({ massage: "success", comment: "ok r do" });
}

module.exports = {
  index,
  uploadfile,
  allMusic,
  comment,
  upcomment,
  showcomment,
};
