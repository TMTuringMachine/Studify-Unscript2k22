const mongoose = require("mongoose");
var Schema = mongoose.Schema;
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
  price: {
    type: Number,
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
      isWatched:{
        type:Boolean,
        default:false,
        required:true
      }
    },
  ],
  rating: {
    type: Number,
    required: false,
    default: 0
  },
  rates: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "USER",
      },
      rate: {
        type: Number,
        default: 0
      },
    }
  ],
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
      userId: {
        type: Schema.Types.ObjectId,
        ref: "USER",
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        required: true,
        default: Date.now(),
      },
      required: false,
    },
  ],
});

const Course = mongoose.model("COURSE", courseSchema);

module.exports = Course;
