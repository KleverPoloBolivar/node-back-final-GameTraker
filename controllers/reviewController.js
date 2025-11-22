const Review = require("../models/Review");

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ juegoId: req.params.juegoId });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener reseñas" });
  }
};

exports.createReview = async (req, res) => {
  try {
    const nuevaReview = new Review(req.body);
    await nuevaReview.save();
    res.status(201).json(nuevaReview);
  } catch (error) {
    res.status(500).json({ error: "Error al crear reseña" });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.json({ message: "Reseña eliminada ✔" });
  } catch (error) {
    res.status(500).json({ error: "Error eliminando reseña" });
  }
};
