const Router = require('express')
const typeControllers = require('../controllers/typeController')
const router = new Router()


router.post('/',typeControllers.create)
router.post('/getAll',typeControllers.getAll)
router.post('/getOne',typeControllers.getOne)


module.exports = router