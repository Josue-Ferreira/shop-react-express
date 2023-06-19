const express = require('express');
const router = express.Router();
// const cartHandlers = require('../model/cartold');
const cartHandlers = require('../model/model');

router.get('/:userid', cartHandlers.getCart);
router.get('/', cartHandlers.getAllCarts);

router.post('/', cartHandlers.createCart);

// router.put('/', cartHandlers.updateCart);

router.delete('/all', cartHandlers.deleteAllCarts);
router.delete('/', cartHandlers.deleteCart);

module.exports = router;