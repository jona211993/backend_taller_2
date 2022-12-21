import "reflect-metadata"
import express from "express";
const morgan = require('morgan')

import database from "./config/database";
import RolesRoutes from "./Routes/roles.routes";
import UsuarioRoutes from "./Routes/usuarios.routes";


const app=express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
database.initialize()
.then(()=> console.log("Database conectados"))
.catch(console.error)
app.use('/api', RolesRoutes)
app.use('/api', UsuarioRoutes)

app.listen( 3030, () => {
    console.log("App execute in port 3030")
});


