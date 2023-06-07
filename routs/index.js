const Router = require('express')
const router = new Router()
const typeRouter  = require('./typeRouter')
const brandRouter  = require('./brandRouter')
const productRouter  = require('./productRouter')
const userRouter  = require('./userRouter')
const basketRouter  = require('./basketRouter')
const lovesRouter  = require('./lovesRouter')
const compareRouter  = require('./compareRouter')
const orderRouter  = require('./orderRouter')
const ratingRouter  = require('./ratingRouter')
const newsRouter  = require('./newsRouter')
router.use('/type',typeRouter)
router.use('/brand',brandRouter)
router.use('/product',productRouter)
router.use('/user',userRouter)
router.use('/basket',basketRouter)
router.use('/loves',lovesRouter)
router.use('/compare',compareRouter)
router.use('/order',orderRouter)
router.use('/rating',ratingRouter)
router.use('/news',newsRouter)
module.exports = router 