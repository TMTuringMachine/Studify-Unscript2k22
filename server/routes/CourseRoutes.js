const { isAuthenticated } = require("../middlewares/Auth");
const { isTeacher} = require("../middlewares/IsTeacher")
const { createCourse, deleteCourse, updateCourse, getCourse, getAllCourses } = require("../controllers/Course");
const express = require("express");

const Router = express.Router();

Router.get("/get/one", getCourse);
Router.get("/get/all", getAllCourses)
Router.post("/create",isAuthenticated, isTeacher, createCourse);
Router.delete("/delete",isAuthenticated, isTeacher, deleteCourse);
Router.put("/update",isAuthenticated, isTeacher, updateCourse);

export default Router;