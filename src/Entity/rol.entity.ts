import{
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    OneToMany,
    UpdateDateColumn
} from "typeorm";

import { UserEntity } from "../Entity/usuario.entity";

@Entity("roles")
export class RoleEntity {
    @PrimaryGeneratedColumn()
    id_rol!: number;

    @Column()
    nombre!: string;

    @OneToMany(type => UserEntity, (user: UserEntity) => user.rol)
    user!: UserEntity[]

    @CreateDateColumn()
    creado_en!: Date;

    @UpdateDateColumn()
    actualizdo_en!:Date;  
}