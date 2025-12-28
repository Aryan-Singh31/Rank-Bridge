import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const mocks = Array.from({ length: 7 }, (_, i) => i + 1);

const UpscTestPage = ({ user }) => {
  return (
    <div className="min-h-screen bg-[url('/images/upscbg.png')] bg-cover bg-center">

      {/* ===== NAVBAR ===== */}
      <Navbar user={user} />

      {/* ===== HEADING ===== */}
      <div className="bg-gray-300/90 py-4 overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="text-4xl md:text-5xl font-bold text-gray-800 whitespace-nowrap"
        >
          Crack UPSC CSE with Rank Bridge
        </motion.div>
      </div>

      {/* ===== MOCK TEST LIST ===== */}
      <main className="px-6 md:px-16 py-12">
        <div className="bg-white/30 backdrop-blur-lg border border-gray-300 rounded-xl p-6 max-h-[60vh] overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {mocks.map((test) => (
              <Link key={test} to="/tests/upsc/instructions">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="h-32 flex items-center justify-center text-3xl font-bold rounded-lg
                             bg-slate-800 text-white shadow-lg cursor-pointer
                             hover:bg-slate-900 transition"
                >
                  MOCK TEST {test}
                </motion.div>
              </Link>
            ))}

          </div>
        </div>
      </main>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
};

export default UpscTestPage;
