const express = require('express');
const router = express.Router();
const cartHandlers = require('../model/cart');

router.get('/:id', cartHandlers.getCart);
router.get('/', cartHandlers.getAllCarts);

router.post('/', cartHandlers.createCart);

router.put('/:id', cartHandlers.updateCart);

router.delete('/:id', cartHandlers.deleteCart);
router.delete('/', cartHandlers.deleteAllCarts);

module.exports = router;