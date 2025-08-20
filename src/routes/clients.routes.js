const express = require("express");
const { getClients, createClient } = require("../controllers/clients.controller");
const auth = require("../middleware/auth");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Clientes
 *     description: Endpoints para la gestión de clientes.
 */

/**
 * @swagger
 * /clients:
 *   get:
 *     summary: Obtener una lista de todos los clientes
 *     tags: [Clientes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de clientes obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   full_name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   phone:
 *                     type: string
 *       401:
 *         description: No autorizado.
 *       500:
 *         description: Error del servidor.
 */
router.get("/", auth, getClients);

/**
 * @swagger
 * /clients:
 *   post:
 *     summary: Crear un nuevo cliente
 *     tags: [Clientes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               full_name:
 *                 type: string
 *                 example: Carlos Pérez
 *               email:
 *                 type: string
 *                 format: email
 *                 example: carlos@example.com
 *               phone:
 *                 type: string
 *                 example: "3001234567"
 *     responses:
 *       201:
 *         description: Cliente creado exitosamente.
 *       400:
 *         description: Solicitud incorrecta.
 *       401:
 *         description: No autorizado.
 *       500:
 *         description: Error del servidor.
 */
router.post("/", auth, createClient);

module.exports = router;
