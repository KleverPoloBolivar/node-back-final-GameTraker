const express = require("express");
const router = express.Router();
const { getReviews, createReview, deleteReview } = require("../controllers/reviewController");

// GET reseñas por juego
router.get("/:juegoId", getReviews);

// POST crear reseña
router.post("/", createReview);

// DELETE eliminar reseña (opcional)
router.delete("/:id", deleteReview);

module.exports = router;
