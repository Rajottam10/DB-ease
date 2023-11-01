import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Category extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    faculty: string

    @Column()
    speciality: string

    @Column()
    age: number

    @Column()
    income: number

}