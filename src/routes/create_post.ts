import express = require ("express");
import { Post } from "../entity/Post";
import { AppDataSource } from "../data-source";

const router = express.Router();

router.post('/api/post', async (req,res)=>{
    const {
        firstName,
        lastName,
        price,
        created_at,
        updated_at
    }= req.body;
    const post = AppDataSource.getRepository(Post).create({
       firstName,
       lastName,
       price
    //    created: created_at,
    //    updated: updated_at
    });
    await post.save();
    return res.json(post);
    // res.send("helloooo");
});


export{
    router as createPostRouter
}  