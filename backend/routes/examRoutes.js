import express from "express";

// middlewares
import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/adminOnly.js";

// controllers
import {
  createExam,
  getAllExams,
  getExamBySlug,
} from "../controllers/examController.js";

const router = express.Router();

// ADMIN ONLY — CREATE EXAM
router.post("/", protect, adminOnly, createExam);

router.get("/slug/:slug", getExamBySlug);


// PUBLIC — GET ALL EXAMS
router.get("/", getAllExams);

export default router;
