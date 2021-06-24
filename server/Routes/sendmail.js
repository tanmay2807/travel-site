import express from 'express';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';

const router = express.Router();

const base_url = "http://localhost:3000";

router.get("/", (req,res)=>{
    const token = jwt.sign({},process.env.SECRET_TOKEN, {expiresIn: 120});

    const url = `${base_url}/reset_pass/${token}`;

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        host: 'smtp.gmail.com',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        },
      });
      
      var mailOptions = {
        from: process.env.EMAIL,
        to: 'goelmilind2902@gmail.com',
        subject: 'Reset password link',
        html: `Here is your password change link: <a href=${url}>Click Here!</a>
        <br/>`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          res.json({msg:"Email sent succesfully! Please check your inbox", token: token})
        }
      });
});

export default router;