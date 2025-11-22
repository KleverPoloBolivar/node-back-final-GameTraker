const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const gameRoutes = require("./routes/gameRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rutas API
app.use("/api/juegos", gameRoutes);
app.use("/api/reviews", reviewRoutes);

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado ✔"))
  .catch((err) => console.error("❌ Error al conectar a MongoDB:", err));

app.listen(PORT, () =>
  console.log(`📡 Servidor corriendo en http://localhost:${PORT}`)
);
