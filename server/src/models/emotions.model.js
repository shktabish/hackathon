const mongoose = require("mongoose")

const Schema = mongoose.Schema

const emotionModel = new Schema(
    {
        angry: Number,
        disgust: Number,
        fear: Number,
        happy: Number,
        sad: Number,
        surprise: Number,
        neutral: Number
    },
    {
        timestamps: true
    }
)

const Emotion = mongoose.model("Emotion", emotionModel)
module.exports = Emotion