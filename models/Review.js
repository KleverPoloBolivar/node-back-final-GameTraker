const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  juegoId: { type: mongoose.Schema.Types.ObjectId, ref: "Game", required: true },
  puntuacion: { type: Number, min: 1, max: 5, required: true },
  textoReseña: { type: String, required: true },
  horasJugadas: Number,
  dificultad: String,
  recomendaria: Boolean,
  fechaCreacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Review", reviewSchema);
