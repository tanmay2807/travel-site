import express from 'express';
import {romantic} from "./../database/schema_romantic.js"
import {best} from "./../database/schema_best.js"
import {budget} from "./../database/schema_budget.js"

const router = express.Router();

router.post("/", async (req,res)=>{

    try {
        console.log(req.body);
        const Romantic_delete = await romantic.findOne({name: req.body.name,location: req.body.location});
        const Best_delete = await best.findOne({name: req.body.name,location: req.body.location});
        const Budget_delete = await budget.findOne({name: req.body.name,location: req.body.location});

        if(Romantic_delete){
            romantic.deleteOne(req.body, function(err,pass){
                if(!err){
                    console.log("deleted");
                    res.json({msg: "Post has been succesfully deleted !"})
                } else {
                    console.log(err);
                    res.json({msg: "An error occured! Please try again"})
                }
            })
        } else if(Best_delete){
            best.deleteOne(req.body, function(err,pass){
                if(!err){
                    console.log("deleted");
                    res.json({msg: "Post has been succesfully deleted !"})
                } else {
                    console.log(err);
                    res.json({msg: "An error occured! Please try again"})
                }
            })
        } else{
            budget.deleteOne(req.body, function(err,pass){
                if(!err){
                    console.log("deleted");
                    res.json({msg: "Post has been succesfully deleted !"})
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