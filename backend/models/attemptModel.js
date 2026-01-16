import mongoose from "mongoose";

const attemptSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    testId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Test",
      required: true,
    },

    startTime: {
      type: Date,
      default: Date.now,
    },

    endTime: {
      type: Date,
    },

    answers: [
      {
        questionId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Question",
        },

        selectedOption: {
          type: Number,
          default: null,
        },

        status: {
          type: String,
          enum: ["not-visited", "visited", "answered", "review"],
          default: "not-visited",
        },
      },
    ],

    score: {
      type: Number,
      default: 0,
    },

    correct: {
  type: Number,
  default: 0,
},

wrong: {
  type: Number,
  default: 0,
},

skipped: {
  type: Number,
  default: 0,
},


    submitted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Attempt = mongoose.model("Attempt", attemptSchema);
export default Attempt;
