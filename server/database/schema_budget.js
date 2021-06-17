import mongoose from 'mongoose';

const schema_budget = mongoose.Schema({
    pic: String,
    name: String,
    location: String
});

export const budget = mongoose.model("Budget", schema_budget);