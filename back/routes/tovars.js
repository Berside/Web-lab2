const Router = require('express')
const router = new Router()
const TovarsController = require('../controllers/Tovars')
router.get('/', TovarsController.getAll);
module.exports = router;