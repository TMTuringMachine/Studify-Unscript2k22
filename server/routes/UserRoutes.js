const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  jwtVerify,
  uploadData,
  uploadTeacherData,
} = require("../controllers/Users");
const { isAuthenticated } = require("../middlewares/Auth");

router.post("/signup", signup);
router.post("/login", login);
router.get("/jwtVerify", jwtVerify);
router.get("/test", isAuthenticated);
router.post("/uploadData", isAuthenticated, uploadData);
router.post("/uploadTeacherData", isAuthenticated, uploadTeacherData);

module.exports = router;
