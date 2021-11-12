import express from 'express';
import {post} from "./../database/schema_post.js";

const router = express.Router();

router.get("/", async (req,res)=>{

    try {
        const postdata = await post.find({main:"unique stay"});

        res.send(postdata);

    } catch (error) {
        console.log(error);
    }
})

router.post("/", async (req,res)=>{
    try {
        const data = req.body;
        var postdata;
        if(data.type == ""){
            postdata = await post.find({special: data.special})
        } else if (data.special == ""){
            postdata = await post.find({type: data.type})
        } else {
            postdata = await post.find({type:data.type, special:data.special});
        }

        res.send(postdata);

    } catch (error) {
        console.log(error);    
    }
})

export default router;