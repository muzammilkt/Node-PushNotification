
const express = require('express');
const { getAllProducts, createProducts, deleteProducts, updateProduct } = require('../controllers/productController');


const router = express.Router();

router.post('/', createProducts)
router.delete('/:id', deleteProducts)
router.patch('/:id', updateProduct)
router.get('/', getAllProducts)
router.post('/fcm', () => { })

module.exports = router