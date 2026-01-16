import ExamCategory from "../models/examCategoryModel.js";

const normalizeExamName = (name) => {
  return name
    .toLowerCase()
    .replace(/\s*[-_]\s*/g, " ") // handles -, _ with any spaces
    .replace(/\s+/g, " ")        // collapse multiple spaces
    .trim();
};

const generateSlug = (normalizedName) => {
  return normalizedName.replace(/\s+/g, "-");
};
export const getExamBySlug = async (req, res) => {
  try {
    const exam = await ExamCategory.findOne({
      slug: req.params.slug,
    });

    if (!exam) {
      return res.status(404).json({
        success: false,
        message: "Exam not found",
      });
    }

    res.status(200).json({
      success: true,
      exam,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch exam",
    });
  }
};


export const createExam = async (req, res) => {
  try {
    let { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Exam name is required" });
    }

    // ✅ Normalize name and slug
    const normalizedName = normalizeExamName(name);
    const slug = generateSlug(normalizedName);

    // 🔍 Check duplicate by slug
    const existingExam = await ExamCategory.findOne({ slug });

    if (existingExam) {
      return res.status(409).json({
        message: "Exam already exists",
      });
    }

    const exam = await ExamCategory.create({
      name: normalizedName.toUpperCase(),
      slug,
    });

    res.status(201).json({ exam });
  } catch (error) {
    console.error("CREATE EXAM ERROR:", error);
    res.status(500).json({ message: "Failed to create exam" });
  }
};

export const getAllExams = async (req, res) => {
  try {
    const exams = await ExamCategory.find();
    res.status(200).json({ exams });
  } catch (error) {
    console.error("GET EXAMS ERROR:", error);
    res.status(500).json({ message: "Failed to fetch exams" });
  }
};

