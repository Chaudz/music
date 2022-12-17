const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var likemusicSchema = new Schema({
  text: {
    type: String,
  },
  userId: {
    type: Number,
  },
  songId: {
    type: String,
    default: null,
  },
});

var LikemusicModel = mongoose.model("likemusic", likemusicSchema);

module.exports = LikemusicModel;
