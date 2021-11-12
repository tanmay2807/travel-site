import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import romantic from "./Routes/romantic.js";
import best from './Routes/best.js';
import budget from './Routes/budget.js';
import register from './Routes/register.js';
import resetpassmail from "./Routes/sendmail.js";
import resetpass from "./Routes/resetpass.js";
import admindata from "./Routes/admindata.js";
import deletepost from "./Routes/deletepost.js";
import editpost from "./Routes/editpost.js";
import reviews from "./Routes/reviews.js";
import mailchimp from "./Routes/mailchimp.js";
import post from "./Routes/post.js";
import postdata from "./Routes/postdata.js";
import uniquedata from "./Routes/uniquedata.js";
import luxurydata from "./Routes/luxurydata.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());

const url = "mongodb+srv://leisurelife:leisurelife123@cluster0.atsre.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const port = process.env.PORT || 5000;

app.use("/", romantic);
app.use("/best", best);
app.use("/budget", budget);
app.use("/register", register);
app.use("/reset_pass", resetpassmail);
app.use("/reset_pass_confirm", resetpass);
app.use("/admindata", admindata);
app.use("/deletepost", deletepost);
app.use("/editpost", editpost);
app.use("/testimonials", reviews);
app.use("/subscribe", mailchimp);
app.use("/post",post);
app.use("/postdata", postdata);
app.use("/uniquedata", uniquedata);
app.use("/luxurydata", luxurydata);

mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology: true})
    .then(()=> app.listen(port, ()=>{
        console.log(`server is running on port ${port}`);
    }))
    .catch((error)=>console.log(error.message))

mongoose.set('useFindAndModify', false);
