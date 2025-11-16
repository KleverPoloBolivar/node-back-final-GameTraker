const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  genero: String,
  plataforma: String,
  añoLanzamiento: Number,
  desarrollador: String,
  imagenPortada: String,
  descripcion: String,
  completado: { type: Boolean, default: false },
  puntuacion: { type: Number, min: 0, max: 5, default: 0 },
  fechaCreacion: { type: Date, default: Date.now }
});
module.exports = mongoose.model("Game", gameSchema);
