import express from "express";
import User from "../models/register-model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Login from "../models/login-model.js";

const router = express.Router();

// JWT token generator
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email },
    "secretKey", // ideally process.env.JWT_SECRET
    { expiresIn: "7d" }
  );
};

router.post("/register", async (req, res) => {
  try {
    const { email, fullname, password } = req.body;

    let user = await User.findOne({ email });
    console.log(req.body);

    if (user) return res.status(401).json({ success: false, message: "Account already exists" });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    user = await User.create({
      email,
      fullname,
      password: hash,
    });

    const token = generateToken(user);

    // Optional: cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // Send token to frontend
    res.status(201).json({
      success: true,
      token,
      message: "User created successfully",
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.json({ success: false, message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.json({ success: false, message: "Invalid password" });

    const token = jwt.sign({ id: user._id }, "secret123", { expiresIn: "7d" });

    res.json({
      success: true,
      token,
      user: { name: user.fullname, email: user.email },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("token", { httpOnly: true, sameSite: "lax" });
  return res.json({ message: "Logged out successfully" });
});

export default router;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         