const Post = require("../models/post.model")
const run = require("../utils/cloudinary")

const uploadPost = async (req, res) => {
    try {
        const { title, desc } = req.body
        
        if(!(title && desc)) {
            return res.status(200).json({ error: "Title and description are necessary" })
        }

        let avatarLocalPath
        if (req.files && Array.isArray(req.files.avatar) && req.files.avatar.length > 0) {
            avatarLocalPath = req.files.avatar[0].path
        }

        let response = ""
        if(avatarLocalPath) {
            response = await run(avatarLocalPath)
        }

        avatar = (response) ? response.secure_url : ""

        const post = Post.create({
            title,
            desc,
            name: req.user.name,
            profilePic: req.user.avatar,
            avatar
        })

        if(!post) {
            return res.status(500).json({ error: "There was an error in uploading the post" })
        }

        return res.status(200).json({ message: "Post uploaded successfully "})
        
    } catch (error) {
        console.log("There was an error during the registration of the user ", error)
        return res.status(500).json({ error: "Internal server error" })
    }
}

const getAllPosts = async (req, res) => {
    try {
        const post = await Post.find({})
        return res.status(200).json(post)
    } catch (error) {
        console.log("There was an error during the registration of the user ", error)
        return res.status(500).json({ error: "Internal server error" })
    }
}

module.exports = {
    getAllPosts,
    uploadPost
}