const GardenTodo = require("../models/GardenTodo.js");

// @desc    Get all garden todos
// @route   GET /api/garden-todos
// @access  Public

exports.getGardenTodos = async (req, res, next) => {
  try {
    const gardenTodos = await GardenTodo.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: gardenTodos.length,
      data: gardenTodos,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server Error" });
  }
};

// @desc    Add garden todo
// @route   POST /api/garden-todos
// @access  Public

exports.addGardenTodo = async (req, res, next) => {
  try {
    const { todo, completed, createdAt } = req.body;

    const gardenTodo = await GardenTodo.create(req.body);

    return res.status(201).json({ success: true, data: gardenTodo });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      res.status(400).json({ success: false, error: messages });
    } else {
      return res.status(500).json({ success: false, error: error.message });
    }
  }
};

// @desc    Delete garden todo
// @route   DELETE /api/garden-todos/:id
// @access  Public

exports.deleteGardenTodo = async (req, res, next) => {
  try {
    const gardenTodo = await GardenTodo.findById(req.params.id);

    if (!gardenTodo) {
      return res
        .status(404)
        .json({ success: false, error: "No garden todo found" });
    }

    await gardenTodo.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Edit garden todo
// @route   PATCH /api/garden-todos/:id
// @access  Public

exports.updateGardenTodo = async (req, res, next) => {
  try {
    let gardenTodo = await GardenTodo.findById(req.params.id);

    if (!gardenTodo) {
      return res
        .status(404)
        .json({ success: false, error: "No garden todo found" });
    }

    gardenTodo.set(req.body).save();
    return res.status(201).json({ success: true, data: gardenTodo });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
