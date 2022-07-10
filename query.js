const dbConnexion = require('./db')
const TodosQuery = class {

    // Inserer une description
    static postDesription = (description) => {
        dbConnexion.query("INSERT INTO todo (description) VALUES ($1) RETURNING *", [description], (err, res) => {
            if (res) {
                return res;
            }
            return err;
        })
    }

    // Get all todos
    static getAlltodos = () => {
        return new Promise ((resolve, reject) => {
            let sql = "SELECT * FROM todo";
            dbConnexion.query(sql, (err, res) => {
                if (err) {
                    reject(err)
                }
                else resolve(res);
            })
        })
    }

    // Get todo
    static getTodo = (id) => {
        return new Promise ((resolve, reject) => {
            console.log('req params query:', id);
            let sql = "SELECT * FROM todo WHERE todo_id = $1";
            dbConnexion.query(sql, [id], (err, res) => {
                if (err) {
                    reject(err)
                }
                else resolve(res);
            })
        })
    }

    // Delete todo
    static deleteTodo = (id) => {
        return new Promise ((resolve, reject) => {
            let sql = "DELETE FROM todo WHERE todo_id = $1";
            dbConnexion.query(sql, [id], (err, res) => {
                if (err) {
                    reject(err)
                }
                else resolve(res);
            })
        })
    }

    // Update todo
    static updateTodo = (data) => {
        let id = data[0]
        let {description} = data[1]
        return new Promise ((resolve, reject) => {
            let sql = "UPDATE todo SET description = $1 WHERE todo_id = $2";
            dbConnexion.query(sql, [description,id], (err, res) => {
                if (err) {
                    reject(err)
                }
                else resolve(res);
            })
        })
    }
}

module.exports = TodosQuery;