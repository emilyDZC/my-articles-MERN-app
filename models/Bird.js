const mongoose = require("mongoose");

const BirdSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please add a name"],
  },
  habitat: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  song: {
    type: String,
  },
  tags: {
    type: Array,
  },
  birdSightings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BirdSighting",
    },
  ],
});

module.exports = mongoose.model("Bird", BirdSchema);
