const mongoose = require("mongoose");

const PlantSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please add a task"],
  },
  latinName: {
    type: String,
    trim: true,
  },
  notes: {
    type: String,
    trim: true,
  },
  sowMonth: {
    type: String,
    trim: true,
  },
  plantMonth: {
    type: String,
    trim: true,
  },
  flowerMonth: {
    type: String,
    trim: true,
  },
  pruneMonth: {
    type: String,
    trim: true,
  },
  // mainImage: {
  //   type: Image,
  // },
  images: {
    type: Array,
  },
  link: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Plant", PlantSchema);
