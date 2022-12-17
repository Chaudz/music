var User = require("../models/user");
var jwt = require("jsonwebtoken");

async function index(req, res, next) {
  res.render("index");
}

async function login(req, res, next) {
  var username = req.body.username;
  var pass = req.body.password;
  var accounts = await User.findOne({
    username: username,
    password: pass,
  })
    .then((data) => {
      if (data) {
        var token = jwt.sign({ _id: data._id }, "mk");
        return res.json({
          message: "thanh cong",
          token: token,
          id: data.id,
          username: data.username,
        });
      } else {
        return res.json("that baii");
      }
    })
    .catch((err) => {
      res.status(500).json("Loi server");
    });
}

module.exports = {
  index,
  login,
};
