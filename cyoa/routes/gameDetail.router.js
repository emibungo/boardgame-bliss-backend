const express = require("express");
const router = express.Router();

const gameDetailController = require("../controllers/gameDetail.controller");

// DELETE Single Game
router.delete("/:id", gameDetailController.deleteGame);

// GET Single Game
router.get("/:id", gameDetailController.getSingleGame);

module.exports = router;
