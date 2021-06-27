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
        res.json({msg: "Post saved successfully !"});

    } catch (error) {
        console.log(error);
        res.json({msg: "An error occured please try again !"});

    }
})

export default router;
