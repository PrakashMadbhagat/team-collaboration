const express = require('express');
const controller = require('../controllers/taskController.js');
const route = express();
const middleware = require('../middleware/authMiddleware');

route.use(middleware);

route.post('/create',controller.createTask);
route.get('/get',controller.getTasks);
route.put('/:id',controller.updateTask);
route.delete('/:id',controller.deleteTask);

module.exports = route