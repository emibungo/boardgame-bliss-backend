const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardgameSchema = new Schema({
  title: { required: true, type: String },
  yearPublished: { required: true, type: Number },
  image: { required: false, type: String }
});

const Boardgame = mongoose.model("Boardgame", boardgameSchema);

module.exports = Boardgame;
