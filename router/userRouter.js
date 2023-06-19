const express = require('express');
const router = express.Router();
const userHandlers = require('../controllers/userController');

router.get('/', userHandlers.getAllUsers);
router.get('/:id', userHandlers.getUserByID);

router.post('/', userHandlers.createUser);
router.post('/profile', userHandlers.userGetProfile);

module.exports = router;