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
        res.json({msg: "Post saved successfully !"});

    } catch (error) {
        console.log(error);
        res.json({msg: "An error occured please try again !"});

    }
})

export default router;
