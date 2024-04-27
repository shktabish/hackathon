const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")

const app = express()

app.use(cors({
    origin: true,
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(cookieParser())

//routes import
const userRouter = require("./routes/user.routes")
const postRouter = require("./routes/post.routes")
const emotionRouter = require("./routes/emotion.routes")

//routes declaration
app.use("/api/v1/user", userRouter)
app.use("/api/v1/post", postRouter)
app.use("/api/v1/emotion", emotionRouter)

module.exports = { app }