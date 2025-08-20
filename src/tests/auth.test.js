// auth.test.js
const request = require("supertest");
const app = require("../server");
const sequelize = require("../config/db");
const bcrypt = require("bcryptjs");

// Importa el modelo para que la tabla pueda ser creada
const User = require("../models/User");

describe("Auth Endpoints", () => {
  beforeAll(async () => {
    // ⭐️ Sincroniza la DB y fuerza la creación de las tablas
    await sequelize.sync({ force: true }); 

    // ⭐️ Crea un usuario de prueba para el test
    const hashedPassword = await bcrypt.hash("123456", 10);
    await User.create({
      name: "Admin",
      email: "admin@test.com",
      password: hashedPassword,
    });
  });

  afterAll(async () => {
    // ⭐️ Cierra la conexión de la DB
    await sequelize.close();
  });

  it("Debe loguear con usuario válido", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "admin@test.com",
        password: "123456"
      });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
  });

  it("Debe rechazar login inválido", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "wrong@test.com",
        password: "wrong"
      });
    // El test ahora debería recibir un 401
    expect(res.statusCode).toBe(401);
  });
});