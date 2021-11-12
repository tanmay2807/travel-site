import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {user} from './../database/schema_user.js';

const router = express.Router();

router.get("/", authenticateUser, async (req,res)=>{

    if(req.access){
        res.send("true");
    } else {
        res.send("false");
    }
    
});

router.post("/", async (req,res)=>{
    const data = req.body;
    const object = {};
    
    const User = await user.findOne({username: data.username});
    
    if(User){
        const validPass = await bcrypt.compare(data.password, User.password);
        if(validPass){

            const token = jwt.sign({username: User.username, id: User._id},process.env.SECRET_TOKEN, {expiresIn: 3600});
            res.send(token);

        } else {
            res.json({msg: "Invalid Password ! Please cross-check"});
        }
    } else {
        res.json({msg: "Invalid Username ! Please cross-check"});
    }

});

function authenticateUser(req,res,next){

    try {
        const token = req.headers.authorization;
        console.log(token);

        jwt.verify(token,process.env.SECRET_TOKEN, (err,result)=>{
            console.log(result);
            if(result){
                req.userId = result.id;
                req.access = result;
            }
        });
    
        next();
    } catch (error) {
        console.log(error);
    }
}

export default router;
