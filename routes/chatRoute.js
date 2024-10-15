const express = require('express');
const controller = require('../controllers/chatController.js');
const route = express();
const middleware = require('../middleware/authMiddleware');

route.use(middleware);

route.post('/send',controller.sendMessage);
route.get('/get',controller.getMessages);

module.exports = route