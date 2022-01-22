const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../middlewares/Auth");
const { isTeacher } = require("../middlewares/IsTeacher");
const {
  createCourse,
  deleteCourse,
  updateCourse,
  getCourse,
  getAllCourses,
} = require("../controllers/Course");

router.post("/create", isAuthenticated, isTeacher, createCourse);
router.get("/delete/:id", isAuthenticated, isTeacher, deleteCourse);
router.post("/update", isAuthenticated, isTeacher, updateCourse);
router.get("/get", getCourse);
router.get("/getAll", getAllCourses);

module.exports = router;
