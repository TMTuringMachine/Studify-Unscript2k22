const User = require("../models/UserSchema");
require("dotenv").config();
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const Razorpay = require("razorpay");

let Razor = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
})

const signup = async (req, res) => {
  var { name, email, phone, password, cpassword } = req.body;
  if (!name || !email || !phone || !password || !cpassword)
    res.status(422).send("Enter all fields");
  try {
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      res.status(422).send("User with this email already exists");
    } else if (password !== cpassword) {
      res.status(422).send("Passwords do not match");
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      password = hashedPassword;
      const user = new User({ name, email, phone, password });
      const saveUser = await user.save();
      if (saveUser) res.status(200).send("User created successfully");
    }
  } catch (error) {
    console.log("Error", error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(200)
        .send({ ok: false, message: "Email or password cannot be blank" });
    }
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isValid = await bcrypt.compare(password, userLogin.password);
      if (!isValid) {
        res.status(200).json({ ok: false, message: "Incorrect Credentials" });
      } else {
        const token = jwt.sign(
          {
            _id: userLogin._id,
            name: userLogin.name,
          },
          process.env.JWT_PRIVATE_KEY,
          {
            expiresIn: "15m",
          }
        );
        return res
          .status(200)
          .json({ ok: true, message: "Login Successfull!", token, userLogin });
      }
    } else {
      res.status(200).send({ ok: false, message: "User does not exist" });
    }
  } catch (error) {
    console.log(error);
  }
};

const jwtVerify = async (req, res) => {
  const token = req.headers.token;
  const decodeToken = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
  if (decodeToken) {
    const user = await User.findById(decodeToken._id);
    return res.send({ user });
  }
  res.send(null);
};

const uploadData = async (req, res) => {
  const { education, DateOfBirth, age, gender, address, image } = req.body;
  console.log(req.body);
  const data = await User.findOneAndUpdate(
    { email: req.user.email },
    { education, DateOfBirth, age, gender, address, image, hasProfile: true }
  );
  res.status(200).send("User Data Updated");
};

const uploadTeacherData = async (req, res) => {
  const { domain, rating, idProof } = req.body;
  const data = await User.findOneAndUpdate(
    { email: req.user.email },
    { domain, rating, idProof }
  );
  res.status(200).send("Teacher Data Uploaded, wait for admin approval");
};

const buyCourse = async (req, res) => {
  const {amount} = req.body;
  let options = {
    amount,
    currency: "INR",
    receipt: "order_receipt_0.1"
  }
  try {
    const razorRes = await Razor.orders.create(options);
    console.log(razorRes);
    return res.status(200).json({ok: true, razorRes});
  } catch (error) {
    console.log(error);
    return res.status(200).json({ok: false, error});
  }
}

const razorCallback = (req, res) => {
  console.log("hey");
  res.redirect("/");
}

module.exports = {
  signup,
  login,
  jwtVerify,
  uploadData,
  uploadTeacherData,
  buyCourse,
  razorCallback
};
