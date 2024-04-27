const express = require("express")
const { postEmotion } = require("../controllers/emotion.controller")

const router = express.Router()
// router.use(verifyJWT)

router.route('/post')
.post(postEmotion)

module.exports = router