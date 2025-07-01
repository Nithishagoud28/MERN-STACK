const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String, required: true },
  rating: { type: Number, required: true },
  ratingCount: { type: Number, required: true },
  tag: { type: String },
  tagColor: { type: String },
  imageUrl: { type: String },
  category: { type: String, required: true }
});

module.exports = mongoose.model("Course", CourseSchema);
