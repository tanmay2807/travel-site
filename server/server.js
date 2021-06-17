import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import romantic from "./Routes/romantic.js";
import best from './Routes/best.js';
import budget from './Routes/budget.js';
import register from './Routes/register.js';

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
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Type, Accept");
    next();
  });

mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology: true})
    .then(()=> app.listen(port, ()=>{
        console.log(`server is running on port ${port}`);
    }))
    .catch((error)=>console.log(error.message))

mongoose.set('useFindAndModify', false);
