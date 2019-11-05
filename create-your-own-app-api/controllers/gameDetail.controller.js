const GameDetailService = require("../services/gameDetail.service");

module.exports = {
  getSingleGame(req, res) {
    BoardgameService.findById();
    res.json({ response });
  }
};

module.exports = {};
