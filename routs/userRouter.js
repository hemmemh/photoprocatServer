const Router = require('express')
const userControllers = require('../controllers/userController')
const router = new Router()


router.post('/login',userControllers.login)
router.post('/registration',userControllers.registration)
router.post('/getOne',userControllers.getOne)
router.post('/logout',userControllers.logout)
router.post('/refresh',userControllers.refresh)
router.get('/:activationLink',userControllers.activate)
router.post('/forgetPassword',userControllers.forgetPassword)
router.post('/forgetPassword2',userControllers.forgetPassword2)
router.post('/change',userControllers.change)
module.exports = router
