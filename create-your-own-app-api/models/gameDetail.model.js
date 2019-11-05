const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({ categoryName: String });

const gameDetailSchema = new Schema({
  title: { ref: "Boardgame", type: mongoose.Schema.Types.ObjectId },
  numberOfPlayers: { required: true, type: String },
  ageRange: { required: true, type: String },
  length: { required: true, type: String },
  publisher: { required: true, type: String },
  categories: { required: true, categorySchema }
});

const GameDetail = mongoose.model("gameDetail", gameDetailSchema);

module.exports = GameDetail;
