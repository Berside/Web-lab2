const Router = require('express')
const router = new Router()
const ContentRouter = require('./content')

router.use('/content', ContentRouter)

module.exports = router