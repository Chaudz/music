const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var LyricSchema = new Schema({
  name: {
    type: String,
    default: "",
  },
  desc: {
    type: String,
  },
  songId: {
    type: String,
    default: null,
  },
});

var LyricModel = mongoose.model("lyric", LyricSchema);

module.exports = LyricModel;
