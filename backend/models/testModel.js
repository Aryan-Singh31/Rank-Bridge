import mongoose from "mongoose";

const testSchema = new mongoose.Schema(
  {
    exam: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ExamCategory",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    duration: {
      type: Number, // in minutes
      required: true,
      min: 1,
    },

    totalQuestions: {
      type: Number,
      required: true,
      min: 1,
    },

    marksPerQuestion: {
      type: Number,
      required: true,
      min: 0,
    },

    negativeMarking: {
      type: Number,
      default: 0,
      min: 0,
    },

    sections: [
      {
        name: String,
        totalQuestions: Number,
      },
    ],

    allowSectionSwitch: {
      type: Boolean,
      default: true,
    },

    languages: {
      type: [String],
      default: ["English"],
    },

    isLive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Test = mongoose.model("Test", testSchema);
export default Test;
