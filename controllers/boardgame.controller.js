const BoardgameService = require("../services/boardgame.service");

module.exports = {
  addNewGame(req, res) {
    const { title, yearPublished, image } = req.body;

    BoardgameService.add(title, yearPublished, image, response => {
      res.json({ response });
    });
  },
  getAllGames(req, res) {
    BoardgameService.findAll(boardgames => {
      res.json({ boardgames });
    });
  }