const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const AudioSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
  },
  musicdata: {
    data: Buffer,
    contentType: String,
  },
  view: {
    type: Number,
    default: 0,
  },
  userId: {
    type: String,
    default: null,
  },
  createDay: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("song_music", AudioSchema);
