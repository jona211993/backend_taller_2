import {DataSource} from "typeorm";
import{Rol} from "../Entity/rol.entity"
import { UserEntity } from "../Entity/usuario.entity";

export default new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "jonatan",
    database: "logisnet",
    entities: [Rol, UserEntity],
    synchronize: true,
    logging: false,
});