import "reflect-metadata"
//import express from "express"
import { DataSource } from "typeorm"
import {User} from "./entity/User"
import { Post } from "./entity/Post"
import { Category } from "./entity/Category"
import { Photo } from "./entity/photo"
import {Client} from "./entity/Client"
import { Transaction } from "./entity/transaction"
import { PhotoMetadata } from "./entity/photometadata"

//const app = express()

export const  AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "9840115582",
    database: "sciever",
    entities: [User,Post, Category, Photo, Client, Transaction, PhotoMetadata],
    synchronize: true,
    // logging: true,
    subscribers: [],
    migrations: [],
})

 //import { AppDataSource } from "./index"

// const photo = new photo()
// photo.name = 
// photo.description = 
// photo.filename = 
// photo.views = 1
// photo.isPublished = true

// await AppDataSource.manager.save(photo)
// console.log("Photo has been saved. Photo id is", photo.id)
