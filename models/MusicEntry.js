const mongoose = require("mongoose");

const MusicEntrySchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please add a title"],
  },
  composer: {
    type: String,
    trim: true,
    required: [true, "Please add a composer"],
  },
  link: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  tags: {
    type: Array,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("MusicEntry", MusicEntrySchema);
