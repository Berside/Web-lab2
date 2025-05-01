const Router = require('express')
const router = new Router()
const MessageController = require('../controllers/MessageController')
router.get('/', MessageController.getAll);
router.post('/create', MessageController.create);
module.exports = router;