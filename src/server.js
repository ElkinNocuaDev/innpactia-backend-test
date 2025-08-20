// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

// Importar rutas
const authRoutes = require("./routes/auth.routes");
const clientRoutes = require("./routes/clients.routes");
const phoneRoutes = require("./routes/phones.routes");
const repairRoutes = require("./routes/repairs.routes");

const app = express();
app.use(cors());
app.use(express.json());

// Documentación de la API con Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/phones", phoneRoutes);
app.use("/api/repairs", repairRoutes);

const PORT = process.env.PORT || 4000;

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}

module.exports = app;