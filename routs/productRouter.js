const Router = require('express')
const productControllers = require('../controllers/productController')
const router = new Router()


router.post('/',productControllers.create)
router.get('/getAll',productControllers.getAll)
router.post('/getOne',productControllers.getOne)
router.post('/change',productControllers.change)
router.post('/getByPurchase',productControllers.getByPurchase)


module.exports = router