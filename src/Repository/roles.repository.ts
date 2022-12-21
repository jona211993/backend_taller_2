import {NotFound} from "http-errors";
import database, { } from "../config/database";

import { DatabaseRepository, Id, Query } from "../declarations";
import { Rol } from "../Entity/rol.entity";

export class RolesRepository implements DatabaseRepository<Rol>{

    async create(data: Partial<Rol>, query?: Query | undefined): Promise<Rol> {
        const repository = database.getRepository(Rol);
        const rol = repository.create(data);
        await repository.save(rol);
        return rol;
    }


    async list(query?: Query | undefined): Promise<Rol[]> {
        const repository = database.getRepository(Rol);
        return repository.find();
    }


   async get(id: Id, query?: Query): Promise<Rol> {
        const repository = database.getRepository(Rol);
        const rol = await repository.findOneBy({id_rol: id as any});           
        if (!rol){
            throw new NotFound ("Rol no existente");}
         return rol;
    }


    async update(id: Id, data: Rol, query?: Query | undefined): Promise<Rol> {
        const repository = database.getRepository(Rol);
        await repository.update(id,data);
        return this.get(id,query);
    }


    async remove(id: Id, query?: Query | undefined): Promise<Rol> {
        const repository = database.getRepository(Rol);
        const rol_eliminado = await this.get(id,query);
        await repository.delete(id);
        return rol_eliminado;

    }

}