const Teaching = require("../models/Teaching");

// @desc    Get all teachings
// @route   GET /api/teachings
// @access  Public

exports.getTeachings = async (req, res, next) => {
  try {
    const teachings = await Teaching.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: teachings.length,
      data: teachings,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server Error" });
  }
};

// @desc    Add teaching
// @route   POST /api/teachings
// @access  Public

exports.addTeaching = async (req, res, next) => {
  try {
    const { title, body, topic, tags, source } = req.body;

    const teaching = await Teaching.create(req.body);

    return res.status(201).json({ success: true, data: teaching });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      res.status(400).json({ success: false, error: messages });
    } else {
      return res.status(500).json({ success: false, error: error.message });
    }
  }
};

// @desc    Delete teaching
// @route   DELETE /api/teaching/:id
// @access  Public

exports.deleteTeaching = async (req, res, next) => {
  try {
    const teaching = await Teaching.findById(req.params.id);

    if (!teaching) {
      return res
        .status(404)
        .json({ success: false, error: "No teaching entry found" });
    }

    await teaching.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Edit teaching
// @route   PATCH /api/teaching/:id
// @access  Public

exports.updateTeaching = async (req, res, next) => {
  try {
    let teaching = await Teaching.findById(req.params.id);

    if (!teaching) {
      return res
        .status(404)
        .json({ success: false, error: "No teaching entry found" });
    }

    teaching.set(req.body).save();
    return res.status(201).json({ success: true, data: teaching });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
