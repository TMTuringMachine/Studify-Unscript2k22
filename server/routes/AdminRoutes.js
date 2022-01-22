const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  getAllTeachers,
  getAllRequests,
  verifyTeacher,
  declineRequest,
  removeTeacher,
  addCourse,
  updateCourse,
  deleteCourse,
  allCourses,
  updateTeacherDetails,
} = require("../controllers/Admin");

router.post("/signup", signup);
router.post("/login", login);
router.get("/allTeachers", getAllTeachers);
router.get("/allTeacherRequests", getAllRequests);
router.post("/verifyTeacher", verifyTeacher);
router.post("/declineRequest", declineRequest);
router.post("/removeTeacher", removeTeacher);
router.post("/addCourse", addCourse);
router.post("/updateCourse", updateCourse);
router.post("/deleteCourse", deleteCourse);
router.get("/allCourses", allCourses);
router.post("/updateTeacher", updateTeacherDetails);

module.exports = router;
