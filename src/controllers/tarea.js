const db = require("../db/index");

const obtenerTareas = async (req, res, next) => {
  try {
    const tareas = await db.query("select * from tarea");

    return res
      .status(200)
      .json({ data: tareas.rows, message: "Todas las tareas" });
  } catch (error) {
    return next(error);
  }
};

const agregar = async (req, res, next) => {
  try {
    const nuevaTarea = {
      titulo: req.body.titulo,
      prioridad: req.body.prioridad,
    };

    await db.query("insert into tarea (titulo, prioridad) values($1, $2)", [
      nuevaTarea.titulo,
      nuevaTarea.prioridad,
    ]);

    return res.status(201).json({ data: nuevaTarea, message: "Éxito" });
  } catch (error) {
    return next(error);
  }
};

const actualizar = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const { titulo, prioridad } = req.body;

    const tarea = db.query("select * from tarea where id = $1", [id]);

    if (!tarea.rowCount) {
      return res.status(200).json({ data: [], message: "No existe la tarea" });
    }

    if (titulo) {
      await db.query("udpate tarea set  titulo = $1", [titulo]);
    }

    if (prioridad) {
      await db.query("udpate tarea set  prioridad = $1", [prioridad]);
    }

    return res.status(204);
  } catch (error) {
    return next(error);
  }
};

module.exports = { obtenerTareas, agregar };
