const express = require("express");
const router = express.Router();

const BoardgameController = require("../controllers/boardgame.controller");

// DELETE Single Game
router.delete("/:id", BoardgameController.deleteGame);

// GET All Games
router.get("/", BoardgameController.getAllGames);

// GET Single Game
router.get("/:id", BoardgameController.getSingleGame);

// POST New Game
router.post("/", BoardgameController.addNewGame);

module.exports = router;
