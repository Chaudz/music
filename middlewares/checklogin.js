var jwt = require("jsonwebtoken");
function checklogin(req, res, next) {
  try {
    var token = req.cookies.token;
    var ketqua = jwt.verify(token, "mk");
    res.data = ketqua._id;
    if (ketqua) {
      next();
    }
  } catch (error) {
    return res.redirect("/"); // quay trở về trang login
  }
}
module.exports = checklogin;
