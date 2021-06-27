import express from 'express';
import {romantic} from "./../database/schema_romantic.js"
import {best} from "./../database/schema_best.js"
import {budget} from "./../database/schema_budget.js"

const router = express.Router();

router.post("/", async (req,res)=>{

    try {
        const olddata = req.body[0];
        const newdata = req.body[1];

        const Romantic_delete = await romantic.findOne({name: olddata.name,location: olddata.location});
        const Best_delete = await best.findOne({name: olddata.name,location: olddata.location});
        const Budget_delete = await budget.findOne({name: olddata.name,location: olddata.location});

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
        } else{
            budget.updateOne(olddata,{$set:newdata}, function(err,pass){
                if(!err){
                    console.log("updated");
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
