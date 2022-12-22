import { Router } from "express";
import { UsuariosController } from "../Controllers/usuarios.controller";

import { UsuariosRepository } from "../Repository/usuarios.repository";
const router = Router();

const controller = new UsuariosController(new UsuariosRepository());

const endpoint = "/usuarios";

router.post(`${endpoint}`, controller.create.bind(controller));
router.get(`${endpoint}`, controller.list.bind(controller));
router.get(`${endpoint}/active`, controller.getActiveUsers.bind(controller));
router.get(`${endpoint}/:id_usuario`, controller.get.bind(controller));
router.put(`${endpoint}/:id_usuario`, controller.update.bind(controller));
router.delete(`${endpoint}/:id_usuario`, controller.remove.bind(controller));
// POST
// GET
//PUT
// DELETE
//PATCH -> Actualizar parcialmente

export default router;
