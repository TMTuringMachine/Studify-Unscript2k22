const mongoose = require("mongoose");
var Schema = mongoose.Schema
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  content: [
    {
      title: {
        type: String,
        required: true,
      },
      videoURL: {
        type: String,
        required: true,
      },
    },
  ],
  rating: {
    type: Number,
    required: true,
  },
  teacherId: {
    type: Schema.Types.ObjectId,
    ref: "USER",
    required: true,
  },
  teacherName: {
    type: String,
    required: true,
  },
  doubts: [
    {
      text: {
        type: String,
        required: true,
      },
      image: {
        type: String,
      },
      date: {
        type: Date,
        required: true,
        default: Date.now(),
      },
    },
  ],
});

const Course = mongoose.model("COURSE", courseSchema);

module.exports = Course;
