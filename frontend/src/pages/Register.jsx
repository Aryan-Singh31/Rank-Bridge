// src/pages/Register.jsx

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { Paintbrush } from "lucide-react";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [loading, setLoading] = useState(false);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [dobError, setDobError] = useState("");

  const navigate = useNavigate();
  const { setUser } = useAuth();

  // ===================== VALIDATION FUNCTIONS =====================
  const validateName = (value) => {
    if (!/^[A-Za-z\s]+$/.test(value)) {
      setNameError("Only alphabets and spaces are allowed");
    } else {
      setNameError("");
    }
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const validateUsername = (value) => {
    if (!/^[a-zA-Z0-9_]{3,20}$/.test(value)) {
      setUsernameError(
        "Username must be 3–20 characters long and contain only letters, numbers, or underscores"
      );
    } else {
      setUsernameError("");
    }
  };

  const validatePassword = (value) => {
    if (value.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  };

  const validateDob = (value) => {
    const today = new Date().toISOString().split("T")[0];
    if (value > today) {
      setDobError("Date of birth cannot be in the future");
    } else {
      setDobError("");
    }
  };

  // ===================== INPUT HANDLERS =====================
  const handleNameChange = (e) => {
    setName(e.target.value);
    validateName(e.target.value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value.trim();
    setEmail(value);
    validateEmail(value);
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value.trim();
    setUsername(value);
    validateUsername(value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
    validateDob(e.target.value);
  };

  // ===================== FORM SUBMIT =====================
  const handleRegister = async (e) => {
    e.preventDefault();

    // Final validation check
    validateName(name);
    validateEmail(email);
    validateUsername(username);
    validatePassword(password);
    validateDob(dob);

    if (nameError || emailError || usernameError || passwordError || dobError) {
      toast.error("Please fix the errors before submitting.");
      return;
    }

    setLoading(true);
    try {
      const payload = {
        name: name.trim(),
        username: username.trim(),
        email: email.trim().toLowerCase(),
        password,
        dob,
      };

      console.log("REGISTER PAYLOAD FROM UI:", {
  name,
  username,
  email,
  password,
  dob,
});

      const res = await axios.post("http://localhost:5000/api/auth/register", payload, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.status === 201) {
        localStorage.setItem("pendingEmail", email.trim().toLowerCase());
        toast.success(res.data.message || "Registration successful! Please verify your email.");
        navigate("/verify-email");
      }
    } catch (err) {
      console.error("Registration error:", err);
      const message =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        "Registration failed. Try again.";

      if (message === "User already exists") {
        localStorage.setItem("pendingEmail", email);
        toast("User already exists! Please verify your email.", { icon: "📧" });
        navigate("/verify-email");
      } else {
        toast.error(message);
      }
    } finally {
      setLoading(false);
    }
  };

  // ===================== UI =====================
  return (
  <div className="relative min-h-screen flex items-center justify-center bg-slate-100 px-4 overflow-hidden">
    
    {/* Subtle gradient blobs */}
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-40"></div>
    <div className="absolute top-1/3 -right-32 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

    {/* SVG dot pattern */}
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.03]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="dots"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="1" fill="#1e293b" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>

    {/* Register Card */}
    <div className="relative z-10 max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
      
      {/* Title */}
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-3xl font-bold text-indigo-700 tracking-wide">
          Rank Bridge
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Create your student account
        </p>
      </div>

      <h2 className="text-center text-xl font-semibold text-slate-700 mb-6">
        Student Registration
      </h2>

      <form onSubmit={handleRegister} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">
            Full Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg border border-slate-300
                       focus:outline-none focus:ring-2 focus:ring-indigo-500
                       focus:border-indigo-500 text-slate-700"
            placeholder="Enter your full name"
            value={name}
            onChange={handleNameChange}
            required
          />
          {nameError && (
            <p className="text-red-500 text-sm mt-1">{nameError}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-lg border border-slate-300
                       focus:outline-none focus:ring-2 focus:ring-indigo-500
                       focus:border-indigo-500 text-slate-700"
            placeholder="you@example.com"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
          )}
        </div>

        {/* Username */}
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">
            Username
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg border border-slate-300
                       focus:outline-none focus:ring-2 focus:ring-indigo-500
                       focus:border-indigo-500 text-slate-700"
            placeholder="Choose a username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          {usernameError && (
            <p className="text-red-500 text-sm mt-1">{usernameError}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded-lg border border-slate-300
                       focus:outline-none focus:ring-2 focus:ring-indigo-500
                       focus:border-indigo-500 text-slate-700"
            placeholder="Minimum 6 characters"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {passwordError && (
            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
          )}
        </div>

        {/* DOB */}
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">
            Date of Birth
          </label>
          <input
            type="date"
            max={new Date().toISOString().split("T")[0]}
            className="w-full px-4 py-2 rounded-lg border border-slate-300
                       focus:outline-none focus:ring-2 focus:ring-indigo-500
                       focus:border-indigo-500 text-slate-700"
            value={dob}
            onChange={handleDobChange}
            required
          />
          {dobError && (
            <p className="text-red-500 text-sm mt-1">{dobError}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-indigo-600 text-white py-2.5 rounded-lg
                     font-semibold tracking-wide shadow-md
                     hover:bg-indigo-700 transition-colors duration-200
                     ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      {/* Login link */}
      <p className="mt-6 text-center text-sm text-slate-600">
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          className="text-indigo-600 font-medium hover:underline cursor-pointer"
        >
          Login
        </span>
      </p>
    </div>
  </div>
);
};

export default Register;   