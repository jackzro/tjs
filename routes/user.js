const router=require('express').Router()
const userController = require("../controller/userController")
const { check, validationResult } = require('express-validator');

router.post('/login',userController.login)
router.post('/register',[
    check('email').isEmail().withMessage('Must be Email format'),
    check('password').isLength({min:8}).withMessage('Must be at least 8 chars long'),
    check('name').not().isEmpty().withMessage("Your Name cannot be Empty !!!"),
    check('role').not().isEmpty().withMessage("Select Your Role !")
],userController.register)
router.get('/credit/:id',userController.getCredit)
router.patch('/plus',userController.creditPlus)
router.patch('/minus',userController.creditMinus)
router.patch('/hasAnswer',userController.hasAnswer)

module.exports=router