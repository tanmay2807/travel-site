import express from 'express';
import {romantic} from "./../database/schema_romantic.js"
import {best} from "./../database/schema_best.js"
import {budget} from "./../database/schema_budget.js"
import {review} from "./../database/schema_reviews.js"
import { post } from '../database/schema_post.js';

const router = express.Router();

router.post("/", async (req,res)=>{

    try {
        const olddata = req.body[0];
        const newdata = req.body[1];

        const Romantic_delete = await romantic.findOne({name: olddata.name,location: olddata.location});
        const Best_delete = await best.findOne({name: olddata.name,location: olddata.location});
        const Budget_delete = await budget.findOne({name: olddata.name,location: olddata.location});
        const Post_delete = await post.findOne({name: olddata.name,location: olddata.location});

        if(Romantic_delete){
            
            romantic.updateOne(olddata,{$set:newdata}, function(err,pass){
                if(!err){
                    console.log("updated");
                    res.json({msg: "Post has been succesfully updated !"})
                } else {
                    console.log(err);
                    res.json({msg: "An error occured! Please try again"})
                }
            })
        } else if(Best_delete){
            best.updateOne(olddata,{$set:newdata}, function(err,pass){
                if(!err){
                    console.log("updated");
                    res.json({msg: "Post has been succesfully updated !"})
                } else {
                    console.log(err);
                    res.json({msg: "An error occured! Please try again"})
                }
            })
        } else if(Budget_delete){
            budget.updateOne(olddata,{$set:newdata}, function(err,pass){
                if(!err){
                    console.log("updated");
                    res.json({msg: "Post has been succesfully updated !"})
                } else {
                    console.log(err);
                    res.json({msg: "An error occured! Please try again"})
                }
            })
        } else if (Budget_delete){
            review.updateOne(olddata,{$set:newdata}, function(err,pass){
                if(!err){
                    console.log("updated");
                    res.json({msg: "Post has been succesfully updated !"})
                } else {
                    console.log(err);
                    res.json({msg: "An error occured! Please try again"})
                }
            })
        } else {
            post.updateOne(olddata,{$set:newdata}, function(err,pass){
                if(!err){
                    res.json({msg: "Post has been succesfully updated !"})
                } else {
                    console.log(err);
                    res.json({msg: "An error occured! Please try again"})
                }
            })
        }

    } catch (error) { 
        console.log(error);
    }

});

export default router;
