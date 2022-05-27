# Repaso

Se intenta crear los pasos necesarios para la creación de una aplicación de Express.
Un API básico que tenga lo necesario para proveer la información al cliente.
El repaso se basa en una lista de tareas.
El API debe poder crear, retornar, actualizar y eliminar una tarea.
Se intenta ser lo más genérico para que los pasos incluidos en el readme se adapten a cualquier proyecto
Se asume que está instalado node, vs code y se tiene conceptos generales de Javascript - Express

## Pasos iniciales para la creación de un servidor en Express

1 Abrir el repositorio. <br>
2 Abrir la terminal e inicializar el proyecto <br>
3 Crear el package json con el siguiente comando:

```
npm init
```

4 Bebe agua. <br>
5 Como el proyecto es de Express, asumimos que tenemos que instalarlo:

```
npm intall express
```

6 Crear el archivo .gitignore y agregar la carpeta node_module<br>
7 Crear servidor de Express en app.js

```js
const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(PORT, () => console.log(`App running in ${PORT}`));
```

7.1 Opcional: Instalar nodemon y agregar al script del package json

```
npm install nodemon
```

- Y en package json:

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "nombre_script": "nodemon nombre_archivo_a_ejecutar"
  },
```

- **nombre_script** : el nombre que se utilizará para levantar la aplicación al hacer npm run, por ejemplo:

```
npm run dev
```

## Inicializar lógica de mi aplicación

1 Crear estructrura de carpetas

- src
  - controllers
  - routes

2 Dentro de routes, crear las rutas correspondientes:

- Crear archivo tarea.js

```js
const express = require("express");

const router = express.Router();

module.exports = router;
```

3 La lógica lo agregamos dentro de controllers:

- Crear el archivo tareas.js
- Creamos la función obtenerTareas para consumir luego en el endpoint de tarea.js

```js
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
```

4 Creamos el endpoint de tarea y llamamos a la función de controllers/tarea.js

```js
const express = require("express");
const { obtenerTareas } = require("../controllers/tarea");

const router = express.Router();

router.get("/", obtenerTareas);

module.exports = router;
```

5 Llamar nuestra ruta desde la aplicación y agregar un prefijo a nuestra ruta:

```js
const express = require("express");

const app = express();
const tareaRoute = require("./src/routes/tarea");

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/tareas", tareaRoute);

app.listen(PORT, () => console.log(`App running in ${PORT}`));
```

## Creación de la base de datos

1 Utilizar el gerenciador preferido (o línea de comandos si se prefiere)
2 Crear la base de datos

```sql
CREATE DATABASE nombre_base_de_datos
```

3 Conectar la nueva de datos con nuestro gerenciador de base de datos
4 Crear tabla a utilizar

```sql
CREATE TABLE tarea(
  id BIGSERIAL NOT NULL PRIMARY KEY,
  titulo VARCHAR NOT NULL,
  prioridad VARCHAR(100)
);
```

##
