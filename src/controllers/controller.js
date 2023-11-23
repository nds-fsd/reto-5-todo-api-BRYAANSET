const { todos } = require('../data/index');

const getAll = (req, res) => {
    return res.status(200).json({ data: todos, total: todos.length });
};


const getById = (req, res) => {

    const todoId = req.params.id
    const selectToDo = todos.find((todo) => {
        return todo.id.toString() === todoId
    });

    if (!selectToDo) {
        return res.status(404).json({ message: "No id found" });
    }
    res.status(200).json({ data: selectToDo });
};



const postCreate = (req, res) => {

    const body = req.body;

    if (!body) {
        return res.status(400).json({ message: "No data found" })

    } else {
        const currentId = todos.map((todo) => todo.id);
        const newId = Math.max(...currentId) + 1;
        const newUser = {
            id: newId,
            text: body.text,
            fecha: new Date(),
            done: body.done,
        };

        todos.push(newUser);
        return res.status(201).json(newUser);
    }


};

const putUpdate = (req, res) => {
    const todoId = req.params.id;
    const body = req.body;

    const updateIndex = todos.findIndex((todo) => todo.id.toString() === todoId);

    if (updateIndex === -1) {
        return res.status(404).json({ message: "No id found" });
    }

    todos[updateIndex] = { ...todos[updateIndex], ...body };

    return res.status(200).json({ data: todos[updateIndex] });
};

const deleteById = (req, res) => {
    const todoId = req.params.id;
    const elementDelete = todos.findIndex((todo) => todo.id.toString() === todoId);

    if (elementDelete === -1) {
        return res.status(404).json({ message: "No id found" });
    }

    todos.splice(elementDelete, 1);
    return res.status(200).json({ data: todos, message: "Entry has been deleted" });
};


module.exports = {
    getAll,
    getById,
    postCreate,
    putUpdate,
    deleteById,

}