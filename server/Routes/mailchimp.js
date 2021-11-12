import express from 'express';
import https from 'https';

const router = express.Router();

function mailchimp(req,res){

    var Email = req.body.email;

    var data = {
        members: [
            {
                email_address: Email,
                status: "subscribed",
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us6.api.mailchimp.com/3.0/lists/3bb490d76b"
    const options = {
        method: "POST",
        auth: process.env.LIST_API
    }
    const request = https.request(url, options, function (response){
        response.on("data",function(data){
            console.log(data.toString());
        })
    })

    request.write(jsonData);
    request.end();

    if(res.statusCode === 200){
        res.json({msg:"Your email registered successfully !"})
    } else {
        res.send("There was an error with signing up, please try again");
    }
}

router.post("/", (req,res)=>{

    mailchimp(req,res);
})

export default router;