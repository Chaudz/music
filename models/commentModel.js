const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  text: {
    type: String,
  },
  userId: {
    type: String,
  },
  songId: {
    type: String,
    default: null,
  },
  createDay: {
    type: Date,
    default: Date.now,
  },
});

var CommentModel = mongoose.model("comment", CommentSchema);

module.exports = CommentModel;
