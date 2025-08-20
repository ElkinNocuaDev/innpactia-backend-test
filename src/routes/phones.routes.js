const express = require("express");
const { getPhonesByClient, createPhone } = require("../controllers/phones.controller");
const auth = require("../middleware/auth");
const router = express.Router();


/**
 * @swagger
 * tags:
 *   - name: Teléfonos
 *     description: Endpoints para la gestión de teléfonos de clientes.
 */

/**
 * @swagger
 * /phones/{clientId}:
 *   get:
 *     summary: Obtener los teléfonos de un cliente por su ID
 *     tags: [Teléfonos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: clientId
 *         required: true
 *         schema:
 *           type: integer
 *         description: El ID del cliente
 *     responses:
 *       200:
 *         description: Lista de teléfonos obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   brand:
 *                     type: string
 *                   model:
 *                     type: string
 *                   issue:
 *                     type: string
 *                   clientId:
 *                     type: integer
 *       401:
 *         description: No autorizado.
 *       404:
 *         description: Cliente no encontrado.
 *       500:
 *         description: Error del servidor.
 */
router.get("/:clientId", auth, getPhonesByClient);  // Listar teléfonos por cliente

/**
 * @swagger
 * /phones:
 *   post:
 *     summary: Crear un nuevo teléfono
 *     tags: [Teléfonos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               brand:
 *                 type: string
 *                 example: Apple
 *               model:
 *                 type: string
 *                 example: iPhone 13 Pro
 *               issue:
 *                 type: string
 *                 example: Batería no carga
 *               clientId:
 *                 type: integer
 *                 description: El ID del cliente al que pertenece este teléfono
 *                 example: 1
 *     responses:
 *       201:
 *         description: Teléfono creado exitosamente.
 *       400:
 *         description: Solicitud incorrecta.
 *       401:
 *         description: No autorizado.
 *       500:
 *         description: Error del servidor.
 */
router.post("/", auth, createPhone);

module.exports = router;
