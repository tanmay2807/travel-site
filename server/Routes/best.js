import express from 'express';
import {best} from './../database/schema_best.js';

const router = express.Router();

router.get("/", async (req,res)=>{
    const data = await best.find();
    try {
        res.json(data);
    } catch (error) {
        res.send(error);
    }
});

router.post("/", async (req,res)=>{
    const data = req.body;

    const newPost = new best(data);
    try {
        await newPost.save();
    } catch (error) {
        console.log(error);
    }
})

export default router;
