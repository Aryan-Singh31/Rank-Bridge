import Attempt from "../models/attemptModel.js";
import Question from "../models/questionModel.js";
import Test from "../models/testModel.js";

export const startTest = async (req, res) => {
  try {
    const { testId } = req.params;
    const userId = req.user.id; // JWT middleware se

    // prevent multiple attempts
    const existingAttempt = await Attempt.findOne({
      userId,
      testId,
      submitted: false,
    });

    if (existingAttempt) {
      return res.status(200).json({
        success: true,
        attemptId: existingAttempt._id,
        resume: true,
      });
    }
const questions = await Question.find({ test: testId }).select("_id");

    const answers = questions.map((q) => ({
      questionId: q._id,
      status: "not-visited",
    }));

    const attempt = await Attempt.create({
      userId,
      testId,
      answers,
    });

    res.status(201).json({
      success: true,
      attemptId: attempt._id,
      resume: false,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to start test",
    });
  }
};

export const saveAnswer = async (req, res) => {
  try {
    const { attemptId } = req.params;
    const { questionId, selectedOption, status } = req.body;

    // 1️⃣ Fetch attempt
    const attempt = await Attempt.findById(attemptId);
    if (!attempt) {
      return res.status(404).json({ message: "Attempt not found" });
    }

    // 2️⃣ If already submitted → block
    if (attempt.submitted) {
      return res.status(403).json({ message: "Test already submitted" });
    }

    // 3️⃣ Fetch test to get duration
    const test = await Test.findById(attempt.testId);
    if (!test) {
      return res.status(404).json({ message: "Test not found" });
    }

    // 4️⃣ TIMER VALIDATION (🔥 MOST IMPORTANT)
    const elapsedMinutes =
      (Date.now() - new Date(attempt.startTime).getTime()) / (1000 * 60);

    if (elapsedMinutes > test.duration) {
      return res.status(403).json({
        message: "Time over. Answer not saved.",
      });
    }

    // 5️⃣ Find and update answer
    const answer = attempt.answers.find(
      (a) => a.questionId.toString() === questionId
    );

    if (!answer) {
      return res.status(404).json({ message: "Question not found in attempt" });
    }

    answer.selectedOption = selectedOption;
    answer.status = status;

    // 6️⃣ Save attempt
    await attempt.save();

    res.status(200).json({
      success: true,
      message: "Answer saved successfully",
    });
  } catch (error) {
    console.error("SAVE ANSWER ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Failed to save answer",
    });
  }
};


export const submitTest = async (req, res) => {
  console.log("🔥 submitTest API HIT");
  try {
    const { attemptId } = req.params;

    const attempt = await Attempt.findById(attemptId)
      .populate("answers.questionId");

    if (!attempt) {
      return res.status(404).json({ message: "Attempt not found" });
    }

    if (attempt.submitted) {
      return res.status(403).json({ message: "Test already submitted" });
    }

    const test = await Test.findById(attempt.testId);
    if (!test) {
      return res.status(404).json({ message: "Test not found" });
    }

    let score = 0;
    let correct = 0;
    let wrong = 0;
    let skipped = 0;

const marks = Number(test.marksPerQuestion) || 0;
const negative = Number(test.negativeMarking) || 0;

attempt.answers.forEach((ans) => {

  if (ans.selectedOption === null || ans.selectedOption === undefined) {
    skipped++;
    return;
  }

  if (Number(ans.selectedOption) === Number(ans.questionId.correctOption)) {
    score += marks;
    correct++;
  } else {
    score -= negative;
    wrong++;
  }
});


    attempt.score = score;
    attempt.correct = correct;
    attempt.wrong = wrong;
    attempt.skipped = skipped;
    attempt.submitted = true;
    attempt.endTime = new Date();

    await attempt.save();

    res.status(200).json({
      success: true,
      score,
      correct,
      wrong,
      skipped,
    });
  } catch (error) {
    console.error("SUBMIT TEST ERROR:", error);
    res.status(500).json({ message: "Submission failed" });
  }
};

export const getResult = async (req, res) => {
  try {
    const { attemptId } = req.params;

    const attempt = await Attempt.findById(attemptId);

    if (!attempt || !attempt.submitted) {
      return res.status(400).json({ message: "Result not available" });
    }

    res.status(200).json({
      success: true,
      score: attempt.score,
      correct: attempt.correct,
      wrong: attempt.wrong,
      skipped: attempt.skipped,
      submittedAt: attempt.endTime,
    });
  } catch (error) {
    console.error("GET RESULT ERROR:", error);
    res.status(500).json({ message: "Failed to fetch result" });
  }
};

export const getAttempt = async (req, res) => {
  try {
    const { attemptId } = req.params;

    const attempt = await Attempt.findById(attemptId);
    if (!attempt) {
      return res.status(404).json({ message: "Attempt not found" });
    }

    res.status(200).json({
      success: true,
      answers: attempt.answers,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch attempt" });
  }
};



