import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
 useEffect(() => {
  const savedUser = localStorage.getItem("user");
  if (savedUser) {
    const user = JSON.parse(savedUser);
    if (user.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/home");
    }
  }
}, [navigate]);


 const handleLogin = async (e) => {
  e.preventDefault();
  const loadingToast = toast.loading("Logging you in...");

  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      identifier,
      password,
    });

    const { user, token } = res.data;

    if (!user || !token) {
      throw new Error("Invalid login response");
    }

    // ✅ SAVE USER WITH ROLE (VERY IMPORTANT)
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);

    // ✅ UPDATE CONTEXT (ONCE)
    login(user, token);

    // ✅ SET AXIOS HEADER
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    toast.success("Login successful 🎉", { id: loadingToast });

    // ✅ REDIRECT BASED ON ROLE (OPTIONAL BUT NICE)
    if (user.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/home");
    }

  } catch (err) {
    console.error("Login error:", err.response?.data || err.message);

    toast.error(
      err.response?.data?.message || "Login failed. Please try again.",
      { id: loadingToast }
    );
  }
};


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

    {/* Login Card */}
    <div className="relative z-10 max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
      
      {/* Title */}
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-3xl font-bold text-indigo-700 tracking-wide">
          Rank Bridge
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Bridge the gap between effort & rank
        </p>
      </div>

      <h2 className="text-center text-xl font-semibold text-slate-700 mb-6">
        Student Login
      </h2>

      {/* Form */}
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">
            Email or Username
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg border border-slate-300
                       focus:outline-none focus:ring-2 focus:ring-indigo-500
                       focus:border-indigo-500 text-slate-700"
            placeholder="Enter email or username"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded-lg border border-slate-300
                       focus:outline-none focus:ring-2 focus:ring-indigo-500
                       focus:border-indigo-500 text-slate-700"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2.5 rounded-lg
                     font-semibold tracking-wide shadow-md
                     hover:bg-indigo-700 transition-colors duration-200"
        >
          Login
        </button>
      </form>

      {/* Footer */}
      <p className="mt-6 text-center text-sm text-slate-600">
        Don’t have an account?{" "}
        <span
          onClick={() => navigate("/register")}
          className="text-indigo-600 font-medium hover:underline cursor-pointer"
        >
          Register
        </span>
      </p>
    </div>
  </div>
);
};

export default Login;  