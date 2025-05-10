const Router = require('express')
const router = new Router()
const CartController = require('../controllers/Cart')
router.post('/', CartController.add);
router.get('/:userId', CartController.getUserCart);
router.put('/:userId/:tovarId', CartController.updateQuantity);
router.delete('/:userId/:tovarId', CartController.remove);


module.exports = router;