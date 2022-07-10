const { json } = require('express');
const todoQuery = require('../query')
const DescriptionController = class {
    // Post todo
    static postDescription = async (req, res) => {
        let {description} = req.body;
        try {
            const result = await todoQuery.postDesription(description);
            res.status(200).json({
                message: "Enregistrement effectue avec succes",
                response : result
            })
        } catch (error) {
            res.status(200).json({
                error : result
            })
        }
        
    }

    // Get all todo
    static getAlltodos = (req, res) => {
        todoQuery.getAlltodos().then((todos) => {
            // res.status(200).json({
            //     response : todos.rows
            // });
            res.render('index', {todos: todos.rows});
            console.log(todos.rows);
        }).catch((err) => {
            // res.status(400).json({
            //     error : err
            // })
        });
    }

    // Get one todo
    static getTodo = (req, res) => {
        let id = req.params.id
        todoQuery.getTodo(id).then((todo) => {
            res.status(200).json({
                response : todo.rows[0]
            })
        }).catch((err) => {
            res.status(400).json({
                error : err
            })
        });
    }

    // Delete todo
    static deleteTodo = (req, res) => {
        let id = req.params.id
        todoQuery.deleteTodo(id).then((todo) => {
            res.status(200).json({
                message : "Colonne supprimee avec succes"
            })
        }).catch((err) => {
            res.status(400).json({
                error : err
            })
        });
    }

    // Delete todo
    static updateTodo = (req, res) => {
        
        let id = req.params.id;
        let description = req.body
        const data = [
            id,
            description
        ];
        todoQuery.updateTodo(data)
        .then((todo) => {
            res.status(200).json({
                message : "Colonne modifiee avec succes"
            })
        }).catch((err) => {
            res.status(400).json({
                error : err
            })
        });
    }
}

module.exports = DescriptionController;