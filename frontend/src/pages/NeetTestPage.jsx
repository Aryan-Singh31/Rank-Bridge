import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const mocks = Array.from({ length: 8 }, (_, i) => ({
  title: `MOCK TEST ${i + 1}`,
 link: "/tests/neet/instructions",
}));

const NeetTestPage = ({ user }) => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('/images/neetbg.png')]">

      {/* ===== NAVBAR ===== */}
      <Navbar user={user} />

      {/* ===== MOVING HEADING ===== */}
      <div className="bg-green-200/90 overflow-hidden py-3">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="text-3xl md:text-5xl font-bold text-gray-800 whitespace-nowrap"
        >
          NATIONAL ELIGIBILITY CUM ENTRANCE TEST (NEET) • NEET • NEET
        </motion.div>
      </div>

      {/* ===== MOCK TEST LIST ===== */}
      <div className="max-w-6xl mx-auto my-16 px-6">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8
                     bg-white/40 backdrop-blur-lg
                     p-8 rounded-xl border"
        >
          {mocks.map((mock, i) => (
            <Link key={i} to={mock.link}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="h-36 flex items-center justify-center
                           rounded-lg
                           bg-gradient-to-r from-green-700 to-emerald-500
                           text-white text-3xl font-bold
                           shadow-xl cursor-pointer"
              >
                {mock.title}
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
};

export default NeetTestPage;
