import express from "express";
import {
  getTestsByExam,
  getTestInstructions,
  getQuestionsByTest,
  addQuestion,
  createTest,
  getAllTests,
} from "../controllers/testController.js";

import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/adminOnly.js";

const router = express.Router();

// ✅ PUBLIC ROUTES (STUDENTS)
router.get("/exam/:examId", getTestsByExam);
router.get("/instructions/:testId", getTestInstructions);
router.get("/questions/:testId", getQuestionsByTest);

// ✅ ADMIN ROUTES
router.post("/", protect, adminOnly, createTest);
router.get("/", protect, adminOnly, getAllTests);
router.post("/:testId/questions", protect, adminOnly, addQuestion);

export default router;
