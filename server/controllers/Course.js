const {model} = require("mongoose");

const Course = model("COURSE");
const Teacher = model("USER");

export const createCourse = async (req, res) => {
    const {title,
         description,
         thumbnail, 
         content, 
         rating, 
         doubts 
    } = req.body;
    try {
        
        const teacher = req.user;
        let newCourse = {
            title,
            description,
            thumbnail,
            content,
            rating,
            teacherId,
            teacherName = teacher.name,
            doubts
        }
        newCourse = await Course.create(newCourse).save();
        return res.status(200).json({ok: true, data: newCourse})
    } catch (error) {
        return res.status(500).json({ok: false, data: error});    
    }

}

export const getCourse = async (req, res) => {
    const {course_id} = req.body;
    try {
        const course = await Course.findById(course_id);
        return res.status(200).json({ok: true, course})
    } catch (error) {
        return res.status(500).json({ok: false, error});
    }
}

export const getAllCourses = (_req, res) => {
    try {
        const allCourses = await Course.find({});
        return res.status(200).json({ok: true, allCourses: allCourses});
    } catch (error) {
        return res.status(500).json({ok: false, error});
    }
}

export const deleteCourse = async (req, res) => {
    const {course_id} = req.body;
    try {
        const something = await Course.findByIdAndDelete(course_id);
        return res.status(200).json({ok: true, message: "course deleted"});
    } catch (error) {
        return res.status(500).json({ok: false, error});
    }
}

export const updateCourse = (req, res) => {

    const {
        course_id,
        title,
        description,
        thumbnail, 
        content, 
        rating, 
        doubts 
    } = req.body;
    const teacher = req.user;
    try {
        let updatedCourse = {
            title,
            description,
            thumbnail,
            content,
            rating,
            doubts
        }
        updatedCourse = await Course.findByIdAndUpdate(course_id, updatedCourse, {new: true});
    } catch (error) {
        return res.status(500).json({ok: false, error});
    }
}