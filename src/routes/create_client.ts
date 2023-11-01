import express = require ("express");
import { Client } from "../entity/Client";
import { AppDataSource } from "../data-source";

const router = express.Router();

router.post('/api/client', async (req,res)=>{
    const {
        first_name,
        last_name,
        age,
        created_at,
        updated_at
    }= req.body;
    const client = AppDataSource.getRepository(Client).create({
       first_name,
       last_name,
       age: age
    //    created: created_at,
    //    updated: updated_at
    });
    await client.save();
    return res.json(client);
    // res.send("helloooo");
});


export{
    router as createClientRouter
}  