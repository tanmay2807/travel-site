import express from "express";
import {review} from "./../database/schema_reviews.js";

const router = express.Router();

router.get("/", async (req,res)=>{
    const data = await review.find();
    try {
        res.json(data);
    } catch (error) {
        res.send(error);
    }
});

router.post("/", async (req,res)=>{
    const data = req.body;
    console.log(data);

    const newPost = new review(data);
    try {
        await newPost.save();
        res.json({msg: "Post saved successfully !"});
    } catch (error) {
        console.log(error);
        res.json({msg: "An error occured please try again !"});
    }
})

export default router;