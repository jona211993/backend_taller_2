import { Router } from "express";
import { UsuariosController } from "../Controllers/usuarios.controller";

import {UsuariosRepository} from "../Repository/usuarios.repository"
const router= Router();

const controller = new UsuariosController(
    new UsuariosRepository()
);

router.post("/usuarios", controller.create.bind(controller));
router.get("/usuarios", controller.list.bind(controller));
router.get("/usuarios/:id_usuario", controller.get.bind(controller));
router.put("/usuarios/:id_usuario", controller.update.bind(controller));
router.delete("/usuarios/:id_usuario",controller.remove.bind(controller))
// POST
// GET
//PUT
// DELETE
//PATCH -> Actualizar parcialmente

export default router;