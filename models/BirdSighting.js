const mongoose = require("mongoose");

const BirdSightingSchema = new mongoose.Schema({
  location: {
    type: String,
    required: [true, "Please give a location"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  notes: {
    type: String,
  },
  bird: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bird",
  },
});

module.exports = mongoose.model("BirdSighting", BirdSightingSchema);
