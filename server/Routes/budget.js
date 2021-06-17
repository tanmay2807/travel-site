import express from 'express';
import {budget} from './../database/schema_budget.js';

const router = express.Router();

router.get("/", async (req,res)=>{
    const data = await budget.find();
    try {
        res.json(data);
    } catch (error) {
        res.send(error);
    }
});

router.post("/", async (req,res)=>{
    const data = req.body;

    const newPost = new budget(data);
    try {
        await newPost.save();
    } catch (error) {
        console.log(error);
    }
})

export default router;
