const Router = require('express')
const orderControllers = require('../controllers/orderController')
const router = new Router()


router.post('/',orderControllers.create)
router.post('/add',orderControllers.add)
router.post('/getAll',orderControllers.getAll)
router.post('/remove',orderControllers.removeOrderItems)



module.exports = router