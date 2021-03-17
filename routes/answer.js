const router=require('express').Router()
const answerController = require('../controller/answerController')
const authentication = require("../middleware/authentication")
const authorization = require("../middleware/authorization")

router.use(authentication)
router.get('/:id',answerController.getAnswer)
router.use(authorization)
router.post('/',answerController.postAnswer)





module.exports=router