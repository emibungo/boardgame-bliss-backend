const express = require("express");
const router = express.Router();

const BoardgameController = require("../controllers/boardgame.controller");

// DELETE Single Game by ID
router.delete("/:id", BoardgameController.deleteSingleGame);

// GET All Games
router.get("/", BoardgameController.getAllGames);

// GET Single Game by ID
router.get("/:id", BoardgameController.getGameById);

// POST New Game
router.post("/", BoardgameController.addNewGame);

module.exports = router;
