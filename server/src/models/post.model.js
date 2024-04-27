const mongoose = require("mongoose")

const Schema = mongoose.Schema

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        profilePic: {
            type: String,
            required: true
        },
        avatar: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

const Post = mongoose.model("Post", postSchema)
module.exports = Post