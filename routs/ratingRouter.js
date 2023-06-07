const Router = require('express')
const ratingControllers = require('../controllers/ratingController')
const router = new Router()


router.post('/',ratingControllers.create)




module.exports = router