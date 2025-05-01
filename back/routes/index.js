const Router = require('express')
const router = new Router()
const ContentRouter = require('./content')
const userRouter = require('./userRouter')
const ReviewRouter = require('./Review')
const messageRouter = require('./message')
const ProductRouter = require('./Product')
router.use('/user', userRouter)
router.use('/content', ContentRouter)
router.use('/review', ReviewRouter)
router.use('/message', messageRouter)
router.use('/product', ProductRouter)

module.exports = router