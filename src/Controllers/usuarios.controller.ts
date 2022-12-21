import { Request, Response, NextFunction } from "express";
import { DatabaseRepository } from "../declarations";
import { UserEntity } from "../Entity/usuario.entity";

export class UsuariosController {
    // constructor
    constructor(private repository: DatabaseRepository<UserEntity>) { }

    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const body = req.body;
            const user = await this.repository.create(body)
            res.status(200).json({
                message: user
            })
        } catch (error) {
            next(error);
        }
    }

    // listar usuarios
    async list(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const usuarios = await this.repository.list();
                res.status(200).json(usuarios)
        } catch (error) {
            next(error);            
        }
    }

     

    // get by id usuario
    async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const {id_usuario}=req.params;
            const usuario= await this.repository.get(id_usuario)
            res.status(200).json(usuario)
        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const {id_usuario}=req.params;
            const body = req.body;
            const usuario= await this.repository.update(id_usuario,body);
            res.status(200).json(usuario)
        } catch (error) {
            next(error);
        }
    }

    async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const {id_usuario}=req.params;
            const usuario= await this.repository.remove(id_usuario);
            res.status(200).json(usuario)
        } catch (error) {
            next(error);
        }
    }
}