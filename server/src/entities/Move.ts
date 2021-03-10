import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Type } from "./Type";

export enum MoveClass {
    Special,
    Normal
}

export enum MoveTarget {
    Single,
    All,
    Team,
    Other,
    Self
}

@Entity()
export class Move {
    @PrimaryGeneratedColumn("uuid")
    moveId: string;

    @Column()
    name: string;

    @Column()
    haveSynergie: boolean;
    
    @OneToMany(() => Type, (type) => type.moveWithSynergieType, {nullable: true})
    synergieType: Type;

    @Column({type: "int"})
    damage: number;

    @Column({type: "int"})
    stamina: number;

    @Column({type: "int"})
    hold: number;
    
    @Column({type: "double"})
    priority: number;

    @OneToMany(() => Type, (type) => type.moves)
    type: Type;

    @Column()
    class: MoveClass;

    @Column()
    Target: MoveTarget;
}
