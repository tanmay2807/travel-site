import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: String,
    password: String
});

export const user = mongoose.model("User", userSchema); 