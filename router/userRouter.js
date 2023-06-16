const express = require('express');
const router = express.Router();
const userHandlers = require('../model/user');

router.get('/', userHandlers.getAllUsers);
router.get('/:id', userHandlers.getUserByID);

router.post('/', userHandlers.createUser);

module.exports = router;