import "reflect-metadata";
import express from "express";
const morgan = require("morgan");

import database from "./config/database";
import RolesRoutes from "./Routes/roles.routes";
import UsuarioRoutes from "./Routes/usuarios.routes";

const main = async () => {
  try {
    const app = express();
    app.use(morgan("dev"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    try {
      await database.initialize();
    console.log("Se conectó correctamente la base de datos");

    } catch (e) {
      console.log("Hubo un error al conectar la base de datos");
    }
    app.use("/api", RolesRoutes);
    app.use("/api", UsuarioRoutes);

    app.listen(3030, () => {
      console.log("App execute in port 3030");
    });
  } catch (error) {
    console.log("Hubo un error al levantar la base de datos");
  }
};

main();
