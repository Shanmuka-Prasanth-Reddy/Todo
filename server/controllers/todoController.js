const Todo = require('../models/todoModel');

// GET all todos
exports.getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

// CREATE todo
exports.createTodo = async (req, res) => {
  const { title, deadline, priority, completed } = req.body;
  try {
    const newTodo = new Todo({ title, deadline, priority, completed });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    console.error("Error creating todo:", err);
    res.status(500).json({ error: "Failed to create todo" });
  }
};


// UPDATE todo
exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedTodo);
};

// DELETE todo
exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({ message: 'Deleted' });
};
