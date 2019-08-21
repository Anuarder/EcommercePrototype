const ShoppingCartControllers = require('../controllers/shoppingCart');
const express = require('express');
const router = express.Router();

router.get('/getShoppingCart',  ShoppingCartControllers.getShoppingCart);
router.post('/addToShoppingCart', ShoppingCartControllers.addToShoppingCart);

module.exports = router;