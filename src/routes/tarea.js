const express = require("express");
const { obtenerTareas } = require("../controllers/tarea");

const router = express.Router();

router.get("/", obtenerTareas);

module.exports = router;
