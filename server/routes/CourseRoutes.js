import { createCourse, deleteCourse, updateCourse, getCourse } from "../controllers/Course";
import { isTeacher } from "../middlewares/IsTeacher";
import { Router as _Router } from "express";



const Router = _Router();

Router.get("/get", getCourse);
Router.post("/create", createCourse);
Router.delete("/delete", deleteCourse);
Router.put("/update", updateCourse);

export default Router;