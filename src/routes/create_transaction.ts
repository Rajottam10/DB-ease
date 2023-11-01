import express= require ("express");
import { Transaction, transactiontypes } from "../entity/transaction";
//import { Client } from "../entity/Client";
import { AppDataSource } from "../data-source";


const router = express.Router();

router.post("/api/transaction", async (req,res)=>{
    const{
    type,
    amount}=req.body;
    const transaction = AppDataSource.getRepository(Transaction).create({
        type,
        amount
    });
    await transaction.save();

    // if (type === transactiontypes.DEPOSIT){
    //     client.balance = client.balance + amount;
    // } else if (type === transactiontypes.WITHDRAW){
    //     client.balance = client.balance - amount;
    // }

    // await client.save()

    return res.json({
        msg: "transaction completed"
    })
})

export {router as createTransactionRouter}