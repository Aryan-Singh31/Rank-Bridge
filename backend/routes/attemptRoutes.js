import express from "express";
import { startTest } from "../controllers/attemptController.js";
import { protect } from "../middleware/authMiddleware.js";
import { saveAnswer,submitTest,getResult, getAttempt } from "../controllers/attemptController.js";

const router = express.Router();


router.post("/start/:testId", protect, startTest);
router.get("/:attemptId", protect, getAttempt);
router.post("/answer/:attemptId", protect, saveAnswer);
router.post("/submit/:attemptId", protect, submitTest);
router.get("/result/:attemptId", protect, getResult);

export default router;
