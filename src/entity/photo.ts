import {Entity,Column,BaseEntity, PrimaryGeneratedColumn, OneToOne} from "typeorm";
import { PhotoMetadata } from "./photometadata";

@Entity()
export class Photo extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100
    })
    name: string

    @Column()
    description: string

    @Column()
    filename: string

    @Column()
    views: number

    @Column()
    isPublished: boolean

    // @OneToOne(()=> PhotoMetadata, (photoMetadata)=> photoMetadata.photo)
   // metadata: PhotoMetadata;
}