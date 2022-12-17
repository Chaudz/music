const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: { type: String },
  username: { type: String },
  password: { type: String },
});

var UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
