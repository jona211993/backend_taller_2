import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";
  import { Rol } from "../Entity/rol.entity";
  
  @Entity("usuarios")
  export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_usuario!: number;
  
    @Column({
      length: 50,
    })
    nombre!: string;
  
    @Column({
      length: 15,
    })
    dni!: string;
  
    @Column({
      length: 255,
    })
    correo!: string;
  
    @Column({
      length: 255,
    })
    contrasenia!: string;
  
    @Column("text")
    direccion!: string;
  
    @Column({
      length: 15,
    })
    celular!: string;
  
    @ManyToOne((type) => Rol, (rol) => rol.id_rol)
    @JoinColumn({name: 'id_rol'})
    rol!: Rol;
  
    @Column({
      length: 25,
    })
    estado!: string;
  
    @Column({
      length: 127,
    })
    motivo!: string;
  
    @Column({
      default: false
    })
    eliminado!: boolean;
  
    @CreateDateColumn()
    fecha_registro!: Date;
  
    @UpdateDateColumn()
    fecha_actualizacion!: Date;
  }