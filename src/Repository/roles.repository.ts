import {NotFound} from "http-errors";
import database, { } from "../config/database";

import { DatabaseRepository, Id, Query } from "../declarations";
import { RoleEntity } from "../Entity/rol.entity";

export class RolesRepository implements DatabaseRepository<RoleEntity>{

    async create(data: Partial<RoleEntity>, query?: Query | undefined): Promise<RoleEntity> {
        const repository = database.getRepository(RoleEntity);
        const rol = repository.create(data);
        await repository.save(rol);
        return rol;
    }


    async list(query?: Query | undefined): Promise<RoleEntity[]> {
        const repository = database.getRepository(RoleEntity);
        return repository.find();
    }


   async get(id: Id, query?: Query): Promise<RoleEntity> {
        const repository = database.getRepository(RoleEntity);
        const rol = await repository.findOneBy({id_rol: id as any});           
        if (!rol){
            throw new NotFound ("RoleEntity no existente");}
         return rol;
    }


    async update(id: Id, data: RoleEntity, query?: Query | undefined): Promise<RoleEntity> {
        const repository = database.getRepository(RoleEntity);
        await repository.update(id,data);
        return this.get(id,query);
    }


    async remove(id: Id, query?: Query | undefined): Promise<RoleEntity> {
        const repository = database.getRepository(RoleEntity);
        const rol_eliminado = await this.get(id,query);
        await repository.delete(id);
        return rol_eliminado;

    }

}