const Bird = require("../models/Bird");
const BirdSighting = require("../models/BirdSighting");

// @desc    Get all bird sightings
// @route   GET /api/birdSightings
// @access  Public

exports.getAllBirdSightings = async (req, res, next) => {
  try {
    const birdSightings = await BirdSighting.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: birdSightings.length,
      data: birdSightings,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server Error" });
  }
};

// @desc    Add birdSighting
// @route   POST /api/birdSightings
// @access  Public

exports.addBirdSighting = async (req, res, next) => {
  try {
    const birdId = req.body.bird;
    const bird = await Bird.findById(birdId);
    const birdSighting = await BirdSighting.create(req.body);
    await birdSighting.save();

    bird.birdSightings.push(birdSighting);
    await bird.save();

    return res.status(201).json({ success: true, data: birdSighting });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      res.status(400).json({ success: false, error: messages });
    } else {
      return res.status(500).json({ success: false, error: error.message });
    }
  }
};

// @desc    Delete birdSighting
// @route   DELETE /api/birdSightings/:id
// @access  Public

exports.deleteBirdSighting = async (req, res, next) => {
  try {
    const birdSighting = await BirdSighting.findById(req.params.id);

    if (!birdSighting) {
      return res
        .status(404)
        .json({ success: false, error: "No birdSighting found" });
    }

    await birdSighting.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Edit birdSightings
// @route   PATCH /api/birdSightings/:id
// @access  Public

exports.updateBirdSighting = async (req, res, next) => {
  try {
    let birdSighting = await BirdSighting.findById(req.params.id);

    if (!birdSighting) {
      return res
        .status(404)
        .json({ success: false, error: "No birdSighting found" });
    }

    birdSighting.set(req.body).save();
    return res.status(201).json({ success: true, data: birdSighting });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Get bird sightings for particular bird
// @route   GET /api/birdSightings/bird/:birdId
// @access  Public

exports.getBirdSightings = async (req, res, next) => {
  try {
    const birdSightings = await Bird.findById(req.params.birdId)
      .populate({
        path: "birdSightings",
      })
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: birdSightings.length,
      data: birdSightings,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server Error" });
  }
};
