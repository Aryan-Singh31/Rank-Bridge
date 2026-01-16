import express from "express";
import { startTest } from "../controllers/attemptController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { saveAnswer,submitTest,getResult, getAttempt } from "../controllers/attemptController.js";

const router = express.Router();

router.post("/start/:testId", authMiddleware, startTest);
router.get("/:attemptId", authMiddleware, getAttempt);
router.post("/answer/:attemptId", authMiddleware, saveAnswer);
router.post("/submit/:attemptId", authMiddleware, submitTest);
router.get("/result/:attemptId", authMiddleware, getResult);

export default router;
