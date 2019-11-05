const express = require("express");
const router = express.Router();

const boardgameController = require("../controllers/boardgame.controller");

// GET All Games
router.get("/", boardgameController.getAllGames);

// POST New Game
router.post("/", boardgameController.addNewGame);

// DELETE Single Game
router.delete("/:id", boardgameController.deleteGame);

module.exports = router;
