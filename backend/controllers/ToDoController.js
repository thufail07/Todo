const ToDoModel = require('../models/ToDoModel');

// Function to get all ToDos
module.exports.getToDo = async (req, res) => {
    try {
        const todos = await ToDoModel.find();
        res.json(todos);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Function to save a new ToDo
module.exports.saveToDo = async (req, res) => {
    try {
        const { text } = req.body;
        const newToDo = await ToDoModel.create({ text });
        console.log("Added Successfully...");
        console.log(newToDo);
        res.json(newToDo);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Function to update a ToDo
module.exports.updateToDo = async (req, res) => {
    try {
        const { id, text } = req.body;
        await ToDoModel.findByIdAndUpdate(id, { text });
        res.send("Updated Successfully....");
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Function to delete a ToDo
module.exports.deleteToDo = async (req, res) => {
    try {
        const { _id } = req.body;
        await ToDoModel.findByIdAndDelete(_id);
        res.send("Delete Successfully....");
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};
