const BoardgameModel = require("../models/Boardgame.model");
const BoardgameDomain = require("../models/Boardgame.domain");

module.exports = {
  add(title, yearPublished, image, callback) {
    const newBoardgame = new BoardgameModel(
      new BoardgameDomain(title, yearPublished, image)
    );
    newBoardgame.save().then(callback);
  },
  delete() {},
  findAll(callback) {
    BoardgameModel.find().then(callback);
  }
};
