const Router = require('express')
const lovesControllers = require('../controllers/lovesController')
const router = new Router()


router.post('/',lovesControllers.create)
router.post('/add',lovesControllers.add)
router.post('/remove',lovesControllers.delete)
router.post('/getOne',lovesControllers.getOne)



module.exports = router