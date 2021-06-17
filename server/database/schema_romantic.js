import mongoose from 'mongoose';

const schema_romantic = mongoose.Schema({
    pic: String,
    name: String,
    location: String
});

export const romantic = mongoose.model("Romantic", schema_romantic);