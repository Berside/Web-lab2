const Router = require('express')
const router = new Router()
const ReviewController = require('../controllers/ReviewController')
router.get('/', ReviewController.getAll);
router.post('/create', ReviewController.create);
module.exports = router;