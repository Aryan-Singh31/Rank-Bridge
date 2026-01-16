import Test from "../models/testModel.js";
import Question from "../models/questionModel.js";

export const getTestsByExam = async (req, res) => {
  try {
    const { examId } = req.params;
    console.log("Exam Id" , examId);

    const tests = await Test.find({
      exam: examId,
      isLive: true,
    })
      .populate("exam", "name") // optional but powerful
      .select("title duration totalQuestions marksPerQuestion");

    res.status(200).json({
      success: true,
      tests,
    });
  } catch (error) {
    console.error("GET TESTS ERROR:", error); 
    res.status(500).json({
      success: false,
      message: "Unable to fetch tests",
    });
  }
};

export const createTest = async (req, res) => {
  try {
const {
  title,
  duration,
  totalQuestions,
  marksPerQuestion,
  negativeMarking,
  exam,
  sections,
  languages,
} = req.body;


   if (!title || !duration || !totalQuestions || !marksPerQuestion || !exam) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

   const test = await Test.create({
  title,
  duration,
  totalQuestions,
  marksPerQuestion,
  negativeMarking,
  exam,
  sections,
});

    res.status(201).json({
      success: true,
      test,
    });
  } catch (error) {
    console.error("CREATE TEST ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add test",
    });
  }
};

export const getAllTests = async (req, res) => {
  try {
    const tests = await Test.find()
      .populate("exam", "name")
     .select("title exam duration totalQuestions");

    res.status(200).json({
      success: true,
      tests,
    });
  } catch (error) {
    console.error("GET ALL TESTS ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch tests",
    });
  }
};


export const getTestInstructions = async (req, res) => {
  try {
    const { testId } = req.params;

    const test = await Test.findById(testId)
    .select(
  "title duration totalQuestions marksPerQuestion negativeMarking sections languages allowSectionSwitch"
);


    if (!test) {
      return res.status(404).json({ success: false, message: "Test not found" });
    }

    res.status(200).json({
      success: true,
      data:test,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load instructions",
    });
  }
};

export const getQuestionsByTest = async (req, res) => {
  try {
    const { testId } = req.params;

    const questions = await Question.find({ test: testId })
.select(
      "-correctOption"
    );

    res.status(200).json({
      success: true,
      questions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load questions",
    });
  }
};

export const addQuestion = async (req, res) => {
  try {
    const question = await Question.create({
      ...req.body,
      test: req.params.testId,
    });

    res.status(201).json({
      success: true,
      question,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add question",
    });
  }
};

