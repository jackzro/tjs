const router=require('express').Router()
const questionRouter = require("./question")
const userRouter = require("./user")
const answerRouter = require("./answer")

router.use('/user',userRouter)
router.use('/question',questionRouter)
router.use('/answer',answerRouter)


module.exports= router