const MusicEntry = require("../models/MusicEntry.js");

// @desc    Get all music entries
// @route   GET /api/music
// @access  Public

exports.getMusicEntries = async (req, res, next) => {
  try {
    const musicEntries = await MusicEntry.find();

    return res.status(200).json({
      success: true,
      count: musicEntries.length,
      data: musicEntries,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server Error" });
  }
};

// @desc    Add music entry
// @route   POST /api/music
// @access  Public

exports.addMusicEntry = async (req, res, next) => {
  try {
    const { title, composer, description, tags, link, createdAt } = req.body;

    const musicEntry = await MusicEntry.create(req.body);

    return res.status(201).json({ success: true, data: musicEntry });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      res.status(400).json({ success: false, error: messages });
    } else {
      return res.status(500).json({ success: false, error: error.message });
    }
  }
};

// @desc    Delete music entry
// @route   DELETE /api/music/:id
// @access  Public

exports.deleteMusicEntry = async (req, res, next) => {
  try {
    const musicEntry = await MusicEntry.findById(req.params.id);

    if (!musicEntry) {
      return res
        .status(404)
        .json({ success: false, error: "No music entry found" });
    }

    await musicEntry.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Edit music entry
// @route   PATCH /api/music/:id
// @access  Public

exports.updateMusicEntry = async (req, res, next) => {
  try {
    let musicEntry = await MusicEntry.findById(req.params.id);

    if (!musicEntry) {
      return res
        .status(404)
        .json({ success: false, error: "No music entry found" });
    }

    musicEntry.set(req.body).save();
    return res.status(201).json({ success: true, data: musicEntry });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
