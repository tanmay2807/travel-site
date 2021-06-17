import mongoose from 'mongoose';

const schema_best = mongoose.Schema({
    pic: String,
    name: String,
    location: String,
    count: Number
});

export const best = mongoose.model("Best", schema_best);