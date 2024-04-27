const express = require("express")
const upload = require("../middlewares/multer.middleware")
const { getAllPosts, uploadPost } = require("../controllers/post.controller")
const verifyJWT = require("../middlewares/auth.middleware")

const router = express.Router()
// router.use(verifyJWT)

router.route('/post')
    .post(upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }
    ]), uploadPost)
    .get(getAllPosts)

module.exports = router
