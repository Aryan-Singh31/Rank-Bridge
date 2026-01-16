import mongoose from "mongoose";

const examCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const ExamCategory = mongoose.model("ExamCategory", examCategorySchema);
export default ExamCategory;
