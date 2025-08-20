const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Reparación de Celulares",
      version: "1.0.0",
      description: "Documentación de la API para gestionar reparaciones de celulares."
    },
    servers: [
      {
        url: "http://localhost:4000/api",
      },
    ],
  },
  // ⭐️ Cambiar la ruta a la raíz de tu proyecto
  apis: ["./src/routes/*.js", "./src/routes/**/*.js"], 
};

const specs = swaggerJsdoc(options);

module.exports = specs;