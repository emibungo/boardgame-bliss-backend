const GameDetailService = require("../services/gameDetail.service");

module.exports = {
  deleteGame(req, res) {
    const { id } = req.params;
    BoardgameService.deleteById(id, boardgame => {
      res.json({ message: "Boardgame deleted", boardgame });
    });
  },
  getSingleGame(req, res) {
    const { id } = req.params;
    BoardgameService.findById(id, boardgame => {
      res.json({ boardgame });
    });
  }
};
