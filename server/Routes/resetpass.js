import express from 'express';
import bcrypt from 'bcrypt';
import { user} from "./../database/schema_user.js";

const saltRounds = 10;
const router = express.Router();

router.post("/", async (req,res)=>{
    const data = req.body;

    const pass_one = data.password;
    const pass_two = data.confirmpassword;

    const User = await user.findOne({});

    if(pass_one == pass_two){
        bcrypt.hash(pass_one, saltRounds, function(err, hash) {
            const prevpass = {password: User.password};
            const newpass = { $set :{password: hash}};
            user.updateOne(prevpass, newpass, function(err,success){
                if(err){
                    console.log(err);
                    res.json({msg:"An error occured ! Please try again"});
                } else {
                    res.json({msg:"password changed successfully !"})
                }
            })
        });
    } else {
        res.json({msg: "Invalid credentials ! Please cross-check"});
    }

});

export default router;
