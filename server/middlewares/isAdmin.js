var jwt = require("jsonwebtoken");
const Admin = require("../models/AdminSchema");

const isAdmin = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
      console.log("test");
    return res.status(401).send("Access Denied, No token provided");
  }
  try {
      console.log("test2");
    const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
      console.log("decoded: ", decoded);
    const rootUser = await Admin.findById(decoded._id);
      console.log("admin: ", rootUser);
    if (rootUser) {
      req.user = rootUser;
      next();
    }
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

module.exports = {isAdmin}
