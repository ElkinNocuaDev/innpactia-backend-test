const express = require("express");
const { getRepairsByPhone, createRepair, getAllRepairs } = require("../controllers/repairs.controller");
const auth = require("../middleware/auth");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Reparaciones
 *     description: Endpoints para la gestión de reparaciones.
 */

/**
 * @swagger
 * /repairs/phone/{phoneId}:
 *   get:
 *     summary: Obtener las reparaciones de un teléfono por su ID
 *     tags: [Reparaciones]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: phoneId
 *         required: true
 *         schema:
 *           type: integer
 *         description: El ID del teléfono
 *     responses:
 *       200:
 *         description: Lista de reparaciones obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   description:
 *                     type: string
 *                   status:
 *                     type: string
 *                   cost:
 *                     type: number
 *                   phoneId:
 *                     type: integer
 *       401:
 *         description: No autorizado.
 *       404:
 *         description: Teléfono no encontrado.
 *       500:
 *         description: Error del servidor.
 */
router.get("/phone/:phoneId", auth, getRepairsByPhone);

/**
 * @swagger
 * /repairs:
 *   get:
 *     summary: Obtener todas las reparaciones
 *     tags: [Reparaciones]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de todas las reparaciones obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   description:
 *                     type: string
 *                   status:
 *                     type: string
 *                   cost:
 *                     type: number
 *                   phoneId:
 *                     type: integer
 *       401:
 *         description: No autorizado.
 *       500:
 *         description: Error del servidor.
 */
router.get("/", auth, getAllRepairs);

/**
 * @swagger
 * /repairs:
 *   post:
 *     summary: Crear una nueva reparación
 *     tags: [Reparaciones]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - description
 *               - cost
 *               - phoneId
 *             properties:
 *               description:
 *                 type: string
 *                 example: Reemplazo de pantalla y batería.
 *               cost:
 *                 type: number
 *                 example: 120.50
 *               status:
 *                 type: string
 *                 example: Pendiente
 *               phoneId:
 *                 type: integer
 *                 description: El ID del teléfono asociado a la reparación
 *                 example: 2
 *     responses:
 *       201:
 *         description: Reparación creada exitosamente.
 *       400:
 *         description: Solicitud incorrecta.
 *       401:
 *         description: No autorizado.
 *       500:
 *         description: Error del servidor.
 */
router.post("/", auth, createRepair);

module.exports = router;
