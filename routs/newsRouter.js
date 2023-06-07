const Router = require('express')
const newsControllers = require('../controllers/newsController')
const router = new Router()


router.post('/',newsControllers.create)
router.post('/getAll',newsControllers.getNews)
router.post('/addComment',newsControllers.addComment)




module.exports = router