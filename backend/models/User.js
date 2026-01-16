
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// ======================= SCHEMA DEFINITION =======================
const userSchema = new mongoose.Schema(
  {
    // =================== Basic Info ===================
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
      minlength: [3, "Username must be at least 3 characters"],
      maxlength: [20, "Username cannot exceed 20 characters"],
      match: [/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, or underscores"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
      select: false, // hide password in queries by default
    },
    role: {
      type: String,
      enum: ["student", "admin"],
      default: "student",
    },
    dob: {
      type: Date,
      required: [true, "Date of birth is required"],
    },

    // =================== Verification ===================
    isVerified: { type: Boolean, default: false },
    otp: { type: String },
    otpExpires: { type: Date },
  },
  { timestamps: true }
);

// ======================= PASSWORD HASHING =======================
userSchema.pre("save", async function () {
  //console.log("🔥 PRE SAVE HOOK HIT");

  // agar password change hi nahi hua
  if (!this.isModified("password")) return;

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    throw error;
  }
});


// ======================= PASSWORD MATCHING =======================
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// ======================= CLEAN RESPONSE =======================
userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  delete obj.otp;
  delete obj.otpExpires;
  return obj;
};

// ======================= MODEL EXPORT =======================
const User = mongoose.model("User", userSchema);
export default User;
