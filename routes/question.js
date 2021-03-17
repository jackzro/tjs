const router=require('express').Router()
const questionController = require("../controller/questionController")
const authentication = require("../middleware/authentication")
const authorization = require("../middleware/authorization")


router.use(authentication)
router.get('/',questionController.getAll)
router.use(authorization)
router.get('/:id',questionController.getDetailQuestion)
router.get('/detail/:id',questionController.getDetail)
router.post('/',questionController.addQuestion)
router.put('/updateQuestionAnswer/:id',questionController.updateQuestionAnswer)

module.exports=router