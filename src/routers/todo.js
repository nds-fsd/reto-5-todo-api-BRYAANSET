const express = require('express');
const controller = require ('../controllers/controller');


const todoRouter = express.Router();

todoRouter.get ('/todo',controller.getAll)

todoRouter.get('/todo/:id', controller.getById)

todoRouter.post ('/todo',controller.postCreate)

todoRouter.put('/todo/:id',controller.putUpdate)

todoRouter.delete ('/todo/:id',controller.deleteById)

module.exports = todoRouter;
