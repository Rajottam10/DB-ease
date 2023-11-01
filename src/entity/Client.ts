import {Entity,Column,BaseEntity,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,OneToMany, ManyToMany,JoinTable} from "typeorm"
import { Transaction } from "typeorm";

@Entity ('client') 

export class Client extends BaseEntity {

    @PrimaryGeneratedColumn()
    client_id: number

    @Column()
    first_name: string;
    
    @Column()
    last_name: string;

    @Column()
    age: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    // @Column({
	// 	type: 'numeric',
	// })
	// balance: number;

    // @OneToMany(
	// 	() => Transaction,
	// 	(transaction) => transaction.client
	// )
	// transactions: Transaction[];
}