// mongodb+srv://shwetasingh5082770_db_user:efV0YFMNcwfBZDxX@cluster0.5vfvy2i.mongodb.net/?appName=Cluster0

// efV0YFMNcwfBZDxX const mongoose = require("mongoose");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// 👇 VERY IMPORTANT
const User = mongoose.model("User", userSchema);

module.exports = User;
