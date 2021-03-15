const mongoose = require("mongoose");

const BirdSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please add a name"],
  },
  location: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  audio: {
    type: String,
    trim: true,
  },
  tags: {
    type: Array,
  },
});
module.exports = mongoose.model("Bird", BirdSchema);
