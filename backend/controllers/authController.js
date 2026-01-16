// controllers/authController.js

import User from "../models/User.js";
import jwt from "jsonwebtoken";
import sendEmail from "../utils/sendEmail.js";
import nodemailer from "nodemailer";
import path from "path";
import multer from "multer";

// ======================= HELPERS =======================

// Generate JWT Token
const generateToken = (id, role) =>
  jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "7d" });

// Generate 6-digit OTP
const generateOTP = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

// ======================= REGISTER USER =======================
export const registerUser = async (req, res) => {
  // console.log("REGISTER BODY:", req.body);
  const { name, username, email, password, dob } = req.body;
  const normalizedEmail = email?.trim().toLowerCase();

  try {
    // Validation
    if (!name || !username || !email || !password || !dob)
      return res.status(400).json({ message: "All fields are required" });

    if (!/^[A-Za-z\s]+$/.test(name))
      return res

        .status(400)
        .json({ message: "Name must contain only letters and spaces" });

    if (!/^[a-zA-Z0-9_]{3,20}$/.test(username))
      return res.status(400).json({
        message:
          "Username must be 3–20 characters and contain only letters, numbers, or underscores",
      });
    if (isNaN(new Date(dob).getTime()))
  return res.status(400).json({ message: "Invalid date of birth" });

    // Check existing user
    const existingUser = await User.findOne({
      $or: [{ email: normalizedEmail }, { username }],
    });

    if (existingUser) {
      if (existingUser.email === normalizedEmail)
        return res.status(400).json({ message: "Email already in use" });
      if (existingUser.username === username)
        return res.status(400).json({ message: "Username already taken" });
    }

    // Generate OTP
    const otp = generateOTP();
    const otpExpires = Date.now() + 10 * 60 * 1000;

    const formattedDob = new Date(dob);
    // Create new user
    const user = await User.create({
      name,
      username,
      email: normalizedEmail,
      password,
      dob: formattedDob,
      otp,
      otpExpires,
    });

    // Send OTP Email
    await sendEmail(
      user.email,
      "Verify your Email - Rank Bridge",
      `<h3>Hi ${user.name},</h3>
       <p>Your OTP for email verification is:</p>
       <h2>${otp}</h2>
       <p>This OTP will expire in 10 minutes.</p>`
    );

    return res.status(201).json({
      message: "OTP sent to your email. Please verify to activate your account.",
    });
 } catch (error) {
  console.error("Register error:", error);

  // 🔥 MongoDB duplicate key error
  if (error.code === 11000) {
    if (error.keyPattern?.email) {
      return res.status(409).json({
        message: "Email already in use",
      });
    }
    if (error.keyPattern?.username) {
      return res.status(409).json({
        message: "Username already taken",
      });
    }
  }

  return res.status(500).json({
    message: "Server error during registration",
  });
}

};

// ======================= VERIFY EMAIL =======================
export const verifyEmail = async (req, res) => {
  const email = req.body.email?.trim().toLowerCase();
  const { otp } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });
    if (user.isVerified)
      return res.status(400).json({ message: "Email already verified" });
    if (user.otp !== otp)
      return res.status(400).json({ message: "Invalid OTP" });
    if (user.otpExpires < Date.now())
      return res.status(400).json({ message: "OTP expired" });

    // Mark user as verified
    user.isVerified = true;
    user.otp = undefined;
    user.otpExpires = undefined;
    await user.save();

    // Send Welcome Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Rank Bridge" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Welcome to Rank Bridge",
     html: `
  <div style="font-family: 'Segoe UI', sans-serif; background-color: #f4f6f8; padding: 32px; border-radius: 10px;">
    
    <h2 style="color: #1e3a8a;">Welcome to RankBridge, ${user.name}!</h2>

    <p style="color: #333; font-size: 15px;">
      We're excited to have you on <strong>RankBridge</strong> — a platform designed to connect 
      students with mentors and provide structured academic guidance.
    </p>

    <p style="color: #333; font-size: 15px;">
      You can now access learning resources, mentor insights, and performance-driven content
      tailored to your academic journey.
    </p>

    <br />

    <a href="${process.env.CLIENT_URL}/login"
      style="
        background-color: #1e3a8a;
        color: #ffffff;
        padding: 12px 26px;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 500;
        display: inline-block;
      ">
      Login to RankBridge
    </a>

    <br /><br />

    <p style="font-size: 13px; color: #555;">
      If you have any questions, feel free to reach out to your mentors through the platform.
    </p>

    <p style="font-size: 13px; color: #777;">
      — Team RankBridge
    </p>

  </div>
`,
    });

    return res.json({ message: "Email verified successfully! Welcome email sent." });
  } catch (error) {
    console.error("Verify email error:", error);
    return res.status(500).json({ message: "Server Error" });
  }
};

// ======================= LOGIN USER =======================
export const loginUser = async (req, res) => {
  const { identifier, password } = req.body;

  try {
    if (!identifier || !password)
      return res
        .status(400)
        .json({ message: "Email/Username and password are required" });

    const user = await User.findOne({
      $or: [
        { email: identifier.trim().toLowerCase() },
        { username: identifier },
      ],
    }).select("+password");

    if (!user) return res.status(400).json({ message: "User not found" });
    if (!user.isVerified)
      return res.status(403).json({
        message: "Email not verified. Please verify before logging in.",
      });

    const isMatch = await user.matchPassword(password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid email or password" });
       
      const role = user.role || "student";

    const token = generateToken(user._id, role);

    return res.json({
      message: "Login successful",
      user: {
        _id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        dob: user.dob,
        profileImage: user.profileImage,
         role: role,
      },
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server Error" });
  }
};

// ======================= RESEND OTP =======================
export const resendOTP = async (req, res) => {
  const email = req.body.email?.trim().toLowerCase();

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });
    if (user.isVerified)
      return res.status(400).json({ message: "Email already verified" });

    const otp = generateOTP();
    user.otp = otp;
    user.otpExpires = Date.now() + 10 * 60 * 1000;
    await user.save();

    await sendEmail(
      user.email,
      "Resend OTP - Rank Bridge",
      `<h3>Hi ${user.name},</h3>
       <p>Your new OTP is:</p>
       <h2>${otp}</h2>
       <p>Valid for 10 minutes.</p>`
    );

    return res.json({ message: "OTP resent to your email." });
  } catch (error) {
    console.error("Resend OTP error:", error);
    return res.status(500).json({ message: "Server Error" });
  }
};

export const getMe = (req, res) => {
  res.json({
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    username: req.user.username,
    role: req.user.role,
  });
};

// ======================= MULTER CONFIG =======================
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/profileImages/"),
  filename: (req, file, cb) =>
    cb(null, `${req.user.id}-${Date.now()}${path.extname(file.originalname)}`),
});

export const upload = multer({ storage });

