const mongoose = require("mongoose");

const mentorApplicationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const MentorApplication = mongoose.model(
  "MentorApplication",
  mentorApplicationSchema
);

module.exports = MentorApplication;
