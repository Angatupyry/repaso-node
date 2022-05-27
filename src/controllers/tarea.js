const tareas = [
  {
    id: 1,
    titulo: "Tarea uno",
    prioridad: "baja",
  },
];

const obtenerTareas = (req, res, next) => {
  try {
    return res.status(200).json({ data: tareas, message: "Todas las tareas" });
  } catch (error) {
    return next(error);
  }
};

module.exports = { obtenerTareas };
