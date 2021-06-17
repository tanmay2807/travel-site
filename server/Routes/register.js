import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.get("/", authenticateUser, async (req,res)=>{

    console.log(req.result);
    
});

router.post("/", async (req,res)=>{
    const data = req.body;

    const token = jwt.sign(data,"supersecret", {expiresIn: 120});
    req.headers['authorization'] = token;
    
    try {
        res.send(token);
        console.log(token);
    } catch (error) {
        console.log(error);
    }
});

function authenticateUser(req,res,next){

    const token = req.headers['authorization'];

    console.log(token);
    jwt.verify(token,"supersecret", (err,result)=>{
        if(err){
            console.log(err);
        } else {
            req.result = result;
            next();
        }
    })
}

export default router;
