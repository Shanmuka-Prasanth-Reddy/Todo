const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: String,
  deadline: {
    type: Date,
    required: true
  },
  priority: {
    type: String,
    enum: ["High", "Medium", "Low"],
    default: "Medium"
  },
  completed: {
    type: Boolean,
    default: false
  }
},{timestamps: true });

module.exports = mongoose.model('Todo', todoSchema);
