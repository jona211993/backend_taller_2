import {NotFound} from "http-errors";
import database, { } from "../config/database";

import { DatabaseRepository, Id, Query } from "../declarations";
import { UserEntity } from "../Entity/usuario.entity";

export class UsuariosRepository implements DatabaseRepository<UserEntity>{

    async create(data: Partial<UserEntity>, query?: Query | undefined): Promise<UserEntity> {
        const repository = database.getRepository(UserEntity);
        const usuario= repository.create(data);
        await repository.save(usuario);
        return usuario;
    }


    async list(query?: Query | undefined): Promise<UserEntity[]> {
        const repository = database.getRepository(UserEntity);
        return repository.find({
            where: {...query},
        });
    }

    async list_habilitados(query?: Query | undefined): Promise<UserEntity[]> {
        const repository = database.getRepository(UserEntity);
        return repository.find();
    }


   async get(id: Id, query?: Query): Promise<UserEntity> {
        const repository = database.getRepository(UserEntity);
        const usuario = await repository.findOneBy({id_usuario: id as any});           
        if (!usuario){
            throw new NotFound ("Usuario no existente");}
         return usuario;
    }


    async update(id: Id, data: UserEntity, query?: Query | undefined): Promise<UserEntity> {
        const repository = database.getRepository(UserEntity);
        await repository.update(id,data);
        return this.get(id,query);
    }


    async remove(id: Id, query?: Query | undefined): Promise<UserEntity> {
        const repository = database.getRepository(UserEntity);
        const usuario_eliminado = await this.get(id,query);
        await repository.delete(id);
        return usuario_eliminado;

    }

}