const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
//create
router.post('/users', userController.createUser);
//read
router.get('/users', userController.getAllUsers);
//update
router.put('/users', userController.updateUser);
//delete
router.delete('/users', userController.deleteUser);
module.exports = router;