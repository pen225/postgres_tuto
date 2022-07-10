const express = require('express');
const DescriptionController = require("../controller/controller")
const router = express.Router();

// Post todo
router.post('/', DescriptionController.postDescription);

// Get all todos Router
router.get('/', DescriptionController.getAlltodos);

// Get one todo
router.get('/:id', DescriptionController.getTodo);

// Delete one todo
router.delete('/:id', DescriptionController.deleteTodo);

// Update one todo
router.put('/:id', DescriptionController.updateTodo);


module.exports = router;