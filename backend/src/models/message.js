import mongoose from "mongoose";

const message = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    }
})