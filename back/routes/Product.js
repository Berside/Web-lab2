const Router = require('express');
const productController = require('../controllers/ProductContoller');

const router = new Router();

router.get('/', productController.getAll);     
router.get('/:id', productController.getOne);  
router.post('/', productController.create);     
router.put('/:id', productController.update); 
router.delete('/:id', productController.delete);

module.exports = router;