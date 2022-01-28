const mongoose = require("mongoose");

const TeachingSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please add a title"],
  },
  body: {
    type: String,
    trim: true,
    required: [true, "Please add some text"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  topic: {
    type: String,
    trim: true,
    required: [true, "Please choose a topic"],
  },
  tags: {
    type: Array,
  },
  source: {
    type: String,
    trim: true,
  },
});
module.exports = mongoose.model("Teaching", TeachingSchema);
