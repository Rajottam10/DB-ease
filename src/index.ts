import "reflect-metadata";
import { DataSource } from "typeorm";
import { Photo } from "./entity/photo";
import { Client } from "./entity/Client";
import { PhotoMetadata } from "./entity/photometadata";
import { AppDataSource } from "./data-source";
import express = require("express");
import { createPhotoRouter } from "./routes/create_photo";
import { createClientRouter } from "./routes/create_client";
import {createPostRouter} from "./routes/create_post";
import { createCategoryRouter } from "./routes/create_category";
import { createTransactionRouter } from "./routes/create_transaction";


// "esModuleInterop": true;
// const app = express();

// const AppDataSource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "postgres",
//     password: "9840115582",
//     database: "sciever",
//     entities: [Photo],
//     synchronize: true,
//     logging: false,
// })

const app = express();

// const client = new Client();
// client.age = 21;
// client.first_name = "Rojan";
// client.last_name = "Shrestha";
// client.id = 5;
// // console.log(client);

// const photo = new Photo();
// photo.name = "city";
// photo.description = "Etihad stadium";
// photo.filename = "city.jpg";
// photo.views = 1;
// photo.isPublished = true;
// // console.log(photo);

// const metadata = new PhotoMetadata();
// metadata.height = 640;
// metadata.width = 480;
// metadata.compressed = true;
// metadata.comment = "cybershoot";
// metadata.orientation = "portrait";
// metadata.photo = photo;

// const photoRepository = AppDataSource.getRepository(Photo);
// const metadataRepository = AppDataSource.getRepository(PhotoMetadata);

AppDataSource.initialize()
  .then(async () => {
    // here you can start to work with your database
    console.log("starting>....");

    app.use (express.json())
    //app.use(createPhotoRouter)
    app.use(createClientRouter)
   // app.use(createPostRouter)
    // app.use(createCategoryRouter)
    //app.use(createTransactionRouter)


    // AppDataSource.manager.save(client);
    // console.log("Client has been saved. ");

    // const photoRepository = AppDataSource.getRepository(Photo);
    // const photos = await photoRepository.find({
    //   relations: { metadata: true },
    // });

    // const photorepository = AppDataSource.getRepository(Photo);
    // const photoremove = await photorepository.findOneBy({
    //   id: 1,
    // });
    // console.log(photoremove);
    // await photorepository.remove(photoremove);

    //  const photorepository = AppDataSource.getRepository(Photo);
    //  //photorepository.save(photo)
    //  const allphotos= photorepository.find();
    //   console.log("all photos from the db", allphotos);
    //   const firstphoto = photorepository.findOneBy({
    //     id:1
    //   })
    //   console.log("first photo from the db: ", firstphoto);

    //   const allviewedphotos= photorepository.findBy({views: 1})
    //     console.log("all viewed photos: ",allviewedphotos);

    //   const savedphoto = photorepository.find()
    //   console.log("all photo from the db:", savedphoto)
  })
  .catch((error) => console.log(error));


app.listen(8080, () => {
  console.log("now running on port 8080");
});
