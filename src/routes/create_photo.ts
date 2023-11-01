import express = require("express");
import { Photo } from "../entity/photo";
import { AppDataSource } from "../data-source";

const router = express.Router();

router.post("/api/photo", async (req, res) => {
  const { name, description, filename, views, isPublished } = req.body;
  const photo = AppDataSource.getRepository(Photo).create({
    name,
    description,
    filename,
    views,
    isPublished,
    //    created: created_at,
    //    updated: updated_at
  });
  await photo.save();
  return res.json(photo);
  // res.send("helloooo");
});

export { router as createPhotoRouter };
