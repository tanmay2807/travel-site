import express from 'express';
import {post} from '../database/schema_post.js';

const router = express.Router();

router.post("/",(req,res)=>{
    const data = req.body;
    const Post = new post(req.body);

    try {
        Post.save();
        res.json({msg: "Post created successfully !"})
    } catch (error) {
        res.json({msg:"An error occured ! please try again"})
    }
})

export default router;