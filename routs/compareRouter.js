const Router = require('express')
const compareControllers = require('../controllers/compareController')
const router = new Router()


router.post('/',compareControllers.create)
router.post('/add',compareControllers.add)
router.post('/remove',compareControllers.delete)
router.post('/removeByType',compareControllers.removeByType)
router.post('/getOne',compareControllers.getOne)



module.exports = router