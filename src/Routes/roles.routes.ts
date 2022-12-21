import { Router } from "express";
import { RolesController } from "../Controllers/roles.controller";

import {RolesRepository} from "../Repository/roles.repository"
const router= Router();

const controller = new RolesController(
    new RolesRepository()
);

router.post("/roles", controller.create.bind(controller));
router.get("/roles", controller.list.bind(controller));
router.get("/roles/:id_rol", controller.get.bind(controller));
router.put("/roles/:id_rol", controller.update.bind(controller));
router.delete("/roles/:id_rol",controller.remove.bind(controller))
// POST
// GET
//PUT
// DELETE
//PATCH -> Actualizar parcialmente

export default router;