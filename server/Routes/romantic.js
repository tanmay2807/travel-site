import express from 'express';
import {romantic} from './../database/schema_romantic.js'

const router = express.Router();

router.get("/", async (req,res)=>{
    const data = await romantic.find();
    try {
        res.json(data);
    } catch (error) {
        res.send(error);
    }
});

router.post("/", async (req,res)=>{
    const data = req.body;

    const newPost = new romantic(data);
    try {
        await newPost.save();
    } catch (error) {
        console.log(error);
    }
})

export default router;
