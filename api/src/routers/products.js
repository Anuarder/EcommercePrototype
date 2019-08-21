const ProductsControllers = require('../controllers/Products');
const express = require('express');
const router = express.Router();

router.get('/getProducts',  ProductsControllers.getProducts);

module.exports = router;