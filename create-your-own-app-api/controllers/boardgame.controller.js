const BoardgameService = require("../services/boardgame.service");

module.exports = {
  addNewGame(req, res) {
    const { title, yearPublished, image } = req.body;

    BoardgameService.add(title, yearPublished, image, response => {
      res.json({ response });
    });
  },
  deleteGame(req, res) {
    const id = req.body;
    BoardgameService.delete(id, response => {
      res.json({ response });
    });
  },
  getAllGames(req, res) {
    BoardgameService.findAll(boardgames => {
      res.json({ boardgames });
    });
  }
};
