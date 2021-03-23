import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { InsultIsSpecialFor } from "./InsultIsSpecialFor";

@Entity()
export class Insult {
  @PrimaryGeneratedColumn("uuid")
  insultId: string;

  @Column()
  text: string;

  @Column()
  trigger: string;

  @OneToMany(
    () => InsultIsSpecialFor,
    (insultIsSpecialFor) => insultIsSpecialFor.insult
  )
  users: InsultIsSpecialFor[];
}
