import { motion } from "framer-motion";
import { User, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/images/back.jpeg')" }}
    >
      {/* ===== Card ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl px-8 py-10"
      >
        {/* ===== Heading ===== */}
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-10 relative">
          Sign In
          <span className="block w-10 h-1 bg-purple-700 mx-auto mt-3 rounded"></span>
        </h1>

        {/* ===== Form (LOGIC SAME) ===== */}
        <form action="/login" method="POST" className="space-y-5">

          {/* Name */}
          <div className="flex items-center bg-gray-100 rounded-md px-3">
            <User className="text-gray-500" size={20} />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full bg-transparent outline-none px-3 py-4"
            />
          </div>

          {/* Email */}
          <div className="flex items-center bg-gray-100 rounded-md px-3">
            <Mail className="text-gray-500" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full bg-transparent outline-none px-3 py-4"
            />
          </div>

          {/* Password */}
          <div className="flex items-center bg-gray-100 rounded-md px-3">
            <Lock className="text-gray-500" size={20} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full bg-transparent outline-none px-3 py-4"
            />
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-purple-700 text-white py-3 rounded-full font-semibold hover:bg-purple-800 transition"
          >
            Sign In
          </motion.button>
        </form>

        {/* ===== Footer Text ===== */}
        <p className="text-sm text-center mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-purple-700 font-semibold hover:underline"
          >
            Signup
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
