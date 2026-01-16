import express from "express";
import User from "../models/User.js";
import {
  registerUser,
  loginUser,
  verifyEmail,
  resendOTP,
  getMe
} from "../controllers/authController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/* AUTH */
router.get("/me", protect, getMe);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/verify-email", verifyEmail);
router.post("/resend-otp", resendOTP);

export default router;
