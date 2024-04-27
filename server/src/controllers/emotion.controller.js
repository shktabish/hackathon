const Emotion = require("../models/emotions.model")

const postEmotion = async (req, res) => {
    try {
        const { angry, disgust, fear, happy, sad, surprise, neutral } = req.body
    
        const emotion = await Emotion.create({
            angry, disgust, fear, happy, sad, surprise, neutral
        })
    
        if(!emotion) {
            return res.status(500).json({ error: "Something went wrong while uploading the teachers information" })
        }
    
        res.status(200).json({ message: `emotions uploaded sucessfully` })
    } catch (error) {
        console.log("There was an error during the registration of the user ", error)
        return res.status(500).json({ error: "Internal server error" })
    }
}

module.exports = {
    postEmotion
}