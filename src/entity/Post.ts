import { Entity, BaseEntity,PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Post extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    price: number

}