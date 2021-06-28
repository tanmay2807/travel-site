import mongoose from "mongoose";

const Schema = mongoose.Schema({
    name: String,
    location:String,
    pic:String
})

export const review = mongoose.model("Review", Schema);