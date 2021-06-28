import express from 'express';
import {romantic} from "./../database/schema_romantic.js"
import {best} from "./../database/schema_best.js"
import {budget} from "./../database/schema_budget.js"
import {review} from "./../database/schema_reviews.js"

const router = express.Router();

router.get("/", async (req,res)=>{

    try {
        const Romantic = await romantic.find();
        const Best = await best.find();
        const Budget = await budget.find();
        const Reviews = await review.find();

        const object = {Romantic, Best, Budget, Reviews};
        res.json({data: object});
    
    } catch (error) { 
        console.log(error);
    }

});



export default router;
