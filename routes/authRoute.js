const express = require('express');
const controller = require('../controllers/authController.js');
const route = express();

route.post('/register',controller.register);
route.post('/login',controller.login);

module.exports = route