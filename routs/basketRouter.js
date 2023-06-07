const Router = require('express')
const basketControllers = require('../controllers/basketController')
const router = new Router()


router.post('/',basketControllers.create)
router.post('/add',basketControllers.add)
router.post('/change',basketControllers.change)
router.post('/remove',basketControllers.delete)
router.post('/removeAll',basketControllers.removeAll)
router.post('/getOne',basketControllers.getOne)



module.exports = router