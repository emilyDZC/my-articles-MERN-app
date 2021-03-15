const Bird = require("../models/Bird");

// @desc    Get all birds
// @route   GET /api/birds
// @access  Public

exports.getBirds = async (req, res, next) => {
  try {
    const birds = await Bird.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: birds.length,
      data: birds,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server Error" });
  }
};

// @desc    Add bird
// @route   POST /api/birds
// @access  Public

exports.addBird = async (req, res, next) => {
  try {
    const bird = await Bird.create(req.body);

    return res.status(201).json({ success: true, data: bird });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      res.status(400).json({ success: false, error: messages });
    } else {
      return res.status(500).json({ success: false, error: error.message });
    }
  }
};

// @desc    Delete bird
// @route   DELETE /api/birds/:id
// @access  Public

exports.deleteBird = async (req, res, next) => {
  try {
    const bird = await Bird.findById(req.params.id);

    if (!bird) {
      return res.status(404).json({ success: false, error: "No bird found" });
    }

    await bird.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Edit birds
// @route   PATCH /api/birds/:id
// @access  Public

exports.updateBird = async (req, res, next) => {
  try {
    let bird = await Bird.findById(req.params.id);

    if (!bird) {
      return res.status(404).json({ success: false, error: "No bird found" });
    }

    bird.set(req.body).save();
    return res.status(201).json({ success: true, data: bird });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
