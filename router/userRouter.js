const express = require('express');
const router = express.Router();
const userHandlers = require('../controllers/userController');

router.get('/', userHandlers.getAllUsers);
router.get('/:id', userHandlers.getUserByID);

router.post('/', userHandlers.createUser);
router.post('/profile', userHandlers.userGetProfile);

router.put('/profile/password/:id', userHandlers.updateUserPassword);
router.put('/profile/:id', userHandlers.updateUser);

module.exports = router;