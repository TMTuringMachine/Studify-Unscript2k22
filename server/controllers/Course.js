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
    const teacherId = req.user.id;
    try {
        
        const teacher = await Teacher.findById(teacherId);
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
        newCourse = await Course.create(newCourse);
        return res.status(200).json({ok: true, data: newCourse})
    } catch (error) {
        return res.status(500).json(error)    
    }

}

export const getCourse = () => {

}

export const deleteCourse = () => {

}

export const updateCourse = () => {

}