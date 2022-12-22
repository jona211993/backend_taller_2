import { Request, Response, NextFunction } from "express";
import { DatabaseRepository } from "../declarations";
import { RoleEntity } from "../Entity/rol.entity";

export class RolesController {
    // constructor
    constructor(private repository: DatabaseRepository<RoleEntity>) { }

    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const body = req.body;
            const rol = await this.repository.create(body)
            res.status(200).json({
                message: rol
            })
        } catch (error) {
            next(error);
        }
    }

    // listar Roles
    async list(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const roles = await this.repository.list();
                res.status(200).json(roles)
        } catch (error) {
            next(error);            
        }
    }

    // get by id rol
    async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const {id_rol}=req.params;
            const rol= await this.repository.get(id_rol)
            res.status(200).json(rol)
        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const {id_rol}=req.params;
            const body = req.body;
            const rol= await this.repository.update(id_rol,body);
            res.status(200).json(rol)
        } catch (error) {
            next(error);
        }
    }

    async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const {id_rol}=req.params;
            const rol= await this.repository.remove(id_rol);
            res.status(200).json(rol)
        } catch (error) {
            next(error);
        }
    }
}