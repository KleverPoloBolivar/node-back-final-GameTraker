const Game = require("../models/Game");

exports.getGames = async (req, res) => {
  try {
    const juegos = await Game.find();
    res.json(juegos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener juegos" });
  }
};

exports.createGame = async (req, res) => {
  try {
    const nuevoJuego = new Game(req.body);
    await nuevoJuego.save();
    res.status(201).json(nuevoJuego);
  } catch (error) {
    res.status(500).json({ error: "Error al crear juego" });
  }
};

exports.deleteGame = async (req, res) => {
  try {
    await Game.findByIdAndDelete(req.params.id);
    res.json({ message: "Juego eliminado ✓" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar juego" });
  }
};
