const express = require("express");
const router = express.Router();

const BoardgameController = require("../controllers/boardgame.controller");

// GET All Games
router.get("/", BoardgameController.getAllGames);

// POST New Game
router.post("/", BoardgameController.addNewGame);

module.exports = router;
