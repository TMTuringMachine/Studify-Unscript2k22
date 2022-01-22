const Course = require("../models/CourseSchema");
const User = require("../models/UserSchema");

const createCourse = async (req, res) => {
  const { title, description, thumbnail, price, content, doubts } = req.body;

  try {
    let exists = await Course.findOne({ title: title });
    if (exists) {
      console.log(exists);
      res.status(200).send("Course with this name already exists");
    } else {
      let newCourse = new Course({
        title,
        description,
        thumbnail,
        price,
        content,
        teacherId: req.user._id,
        teacherName: req.user.name,
      });
      let NewCourse = await newCourse.save();
      return res
        .status(200)
        .json({ ok: true, message: "New Course Added by Teacher", NewCourse });
    }
  } catch (error) {
    return res.status(500).json({ ok: false, data: error });
  }
};

const deleteCourse = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const Delete = await Course.findByIdAndDelete(id);
    console.log(Delete);
    return res
      .status(200)
      .json({ ok: true, message: "Course Deleted by Teacher", Delete });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
};

const updateCourse = async (req, res) => {
  const { courseId, title, description, thumbnail, price, content, doubts } =
    req.body;
  try {
    const updatedCourse = await Course.findByIdAndUpdate(courseId, {
      title,
      description,
      thumbnail,
      price,
      content,
      teacherId: req.user._id,
      teacherName: req.user.name,
      doubts,
    });
    return res
      .status(200)
      .json({ ok: true, message: "Course Updated by Teacher", updatedCourse });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
};

const getCourse = async (req, res) => {
  const { courseId } = req.body;
  try {
    const course = await Course.findById(courseId);
    return res.status(200).json({ ok: true, course });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const allCourses = await Course.find({});
    return res.status(200).json({ ok: true, allCourses: allCourses });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
};

module.exports = {
  createCourse,
  getCourse,
  getAllCourses,
  deleteCourse,
  updateCourse,
};
