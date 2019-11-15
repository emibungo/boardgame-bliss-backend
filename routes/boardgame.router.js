const boardgameController = require("../controllers/boardgame.controller");
const express = require("express");
const router = express.Router();

// DELETE Single Game by ID
router.delete("/:id", boardgameController.deleteSingleGame);

// GET All Games
router.get("/", boardgameController.getAllGames);

// GET Single Game by ID
router.get("/:id", boardgameController.getGameById);

// POST New Game
router.post("/", boardgameController.addNewGame);

module.exports = router;
