const mongoose = require("mongoose");

const GardenTodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    trim: true,
    required: [true, "Please add a task"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  month: {
    type: String,
    required: [
      true,
      "Please select a month when this task should be completed",
    ],
  },
});

module.exports = mongoose.model("GardenTodo", GardenTodoSchema);
