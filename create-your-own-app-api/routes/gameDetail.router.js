const express = require("express");
const router = express.Router();

const gameDetailController = require("../controllers/gameDetail.controller");

// GET Single Game Details
router.get("/:id", gameDetailController.getSingleGame);

module.exports = router;
