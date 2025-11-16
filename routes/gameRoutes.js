const express = require("express");
const router = express.Router();
const { getGames, createGame, deleteGame } = require("../controllers/gameController");

router.get("/", getGames);
router.post("/", createGame);
router.delete("/:id", deleteGame);
router.put("/:id", updateGame);
module.exports = router;
