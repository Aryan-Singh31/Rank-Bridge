import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, User } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthProvider";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* ===== Logo ===== */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/finall.png" alt="logo" className="h-14" />
        </Link>

        {/* ===== Search (Desktop) ===== */}
        <div className="hidden lg:flex items-center gap-2">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-2.5 text-gray-500"
            />
            <input
              type="text"
              placeholder="Search courses..."
              className="pl-10 pr-4 py-2 w-72 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Search
          </button>
        </div>

        {/* ===== Desktop Links ===== */}
        <div className="hidden lg:flex items-center gap-6 font-semibold">
          <Link className="hover:text-blue-600 transition" to="/">
            Home
          </Link>
          <Link className="hover:text-blue-600 transition" to="/aboutus">
            About
          </Link>

         {user ? (
  <div className="flex items-center gap-4">
    <div className="flex items-center gap-2 text-blue-600">
      <User size={18} />
      <span>{user.name}</span>
    </div>

    <button
      onClick={logout}
      className="text-red-600 hover:text-red-700 font-semibold"
    >
      Logout
    </button>
  </div>
) : (
  <Link
    to="/login"
    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
  >
    Login
  </Link>
)}

        </div>

        {/* ===== Mobile Menu Button ===== */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-gray-700"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ===== Mobile Menu ===== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t shadow-md"
          >
            <div className="flex flex-col gap-4 px-6 py-6 font-semibold">
              <Link onClick={() => setOpen(false)} to="/">
                Home
              </Link>
              <Link onClick={() => setOpen(false)} to="/aboutus">
                About
              </Link>

              {/* Search (Mobile) */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full border rounded-lg px-3 py-2 outline-none"
                />
                <button className="bg-blue-600 text-white px-4 rounded-lg">
                  Go
                </button>
              </div>

             {user ? (
  <>
    <span className="text-blue-600">
      Hello, {user.name}
    </span>
    <button
      onClick={() => {
        logout();
        setOpen(false);
      }}
      className="text-red-600 font-semibold"
    >
      Logout
    </button>
  </>
) : (
  <Link
    to="/login"
    onClick={() => setOpen(false)}
    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center"
  >
    Login
  </Link>
)}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
