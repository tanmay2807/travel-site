import mongoose from 'mongoose';

const schema = mongoose.Schema({
    main:String,
    name: String,
    location: String,
    inclusion: String,
    type:String,
    special:String,
    pic:String,
    info:String
});

export const post = mongoose.model("Destination", schema);