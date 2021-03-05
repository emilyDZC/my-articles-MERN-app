const Plant = require("../models/Plants.js");

// @desc    Get all plants
// @route   GET /api/plants
// @access  Public

exports.getPlants = async (req, res, next) => {
  try {
    const plants = await Plant.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: plants.length,
      data: plants,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server Error" });
  }
};

// @desc    Add plant
// @route   POST /api/plants
// @access  Public

exports.addPlant = async (req, res, next) => {
  try {
    const { todo, completed, createdAt } = req.body;

    const plant = await Plant.create(req.body);

    return res.status(201).json({ success: true, data: plant });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      res.status(400).json({ success: false, error: messages });
    } else {
      return res.status(500).json({ success: false, error: error.message });
    }
  }
};

// @desc    Delete plant
// @route   DELETE /api/plants/:id
// @access  Public

exports.deletePlant = async (req, res, next) => {
  try {
    const plant = await Plant.findById(req.params.id);

    if (!plant) {
      return res.status(404).json({ success: false, error: "No plant found" });
    }

    await plant.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Edit plants
// @route   PATCH /api/plants/:id
// @access  Public

exports.updatePlant = async (req, res, next) => {
  try {
    let plant = await Plant.findById(req.params.id);

    if (!plant) {
      return res.status(404).json({ success: false, error: "No plant found" });
    }

    plant.set(req.body).save();
    return res.status(201).json({ success: true, data: plant });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
