const express = require("express");
const router = express.Router();
const {signup,login,jwtVerify,uploadData,uploadTeacherData, buyCourse, razorCallback} = require('../controllers/Users')
const {isAuthenticated} = require('../middlewares/Auth')

router.post("/signup", signup)
router.post("/login", login)
router.get("/jwtVerify", jwtVerify)
router.get("/test", isAuthenticated)
router.post("/uploadData",isAuthenticated,uploadData)
router.post("/uploadTeacherData",isAuthenticated,uploadTeacherData)
router.post("/buyCourse/createorder", buyCourse);
router.post("buyCourse/razor/callback", razorCallback);


module.exports = router;
