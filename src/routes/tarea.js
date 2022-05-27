const express = require("express");
const { obtenerTareas, agregar } = require("../controllers/tarea");

const router = express.Router();

router.get("/", obtenerTareas);

router.post("/", agregar);

module.exports = router;
