import express = require ("express");
import { Category } from "../entity/Category";
import { AppDataSource } from "../data-source";

const router = express.Router();

router.post('/api/category', async (req,res)=>{
    const {
        faculty,
        speciality,
        age,
        income
        // created_at,
        // updated_at
    }= req.body;
    const category = AppDataSource.getRepository(Category).create({
       faculty,
       speciality,
       age: age,
       income
    //    created: created_at,
    //    updated: updated_at
    });
    await category.save();
    return res.json(category);
    // res.send("helloooo");
});


export{
    router as createCategoryRouter
}  