const Router = require('express')
const router = new Router()
const ContentController = require('../controllers/Content')
router.get('/check', ContentController.getAll);
module.exports = router;