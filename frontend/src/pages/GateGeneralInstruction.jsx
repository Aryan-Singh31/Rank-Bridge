import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GateGeneralInstruction = ({ user }) => {
  return (
    <div className="w-full min-h-screen bg-slate-50">

      {/* ===== NAVBAR ===== */}
      <Navbar user={user} />

      {/* ===== TITLE ===== */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl md:text-3xl font-bold text-center mt-8"
      >
        Marks Distribution (GATE)
      </motion.h1>

      {/* ===== IMAGE ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex justify-center mt-6"
      >
        <img
          src="/images/gategenralinst.png"
          alt="GATE Marks Distribution"
          className="w-[90%] md:w-[75%] rounded-xl shadow-lg"
        />
      </motion.div>

      {/* ===== CONTENT ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-5xl mx-auto bg-white mt-10 mb-16 p-6 md:p-10 rounded-xl shadow-lg"
      >
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          General Instructions
        </h2>

        <p className="text-gray-700 mb-4">
          The clock will be set at the server. When the timer reaches zero,
          the examination will automatically end.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><b>1</b> – Not visited</li>
          <li><b>3</b> – Not answered</li>
          <li><b>4</b> – Answered</li>
          <li><b>6</b> – Marked for review (not answered)</li>
          <li><b>9</b> – Answered & marked for review</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
          Negative Marking
        </h2>

        <p className="text-red-600 font-semibold">
          1/3rd marks will be deducted for wrong answers.
        </p>

        <p className="text-green-600 font-semibold">
          No negative marking for unanswered questions.
        </p>

        {/* ===== NEXT BUTTON ===== */}
        <div className="flex justify-end mt-10">
          <Link to="/tests/gate/mock/1">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow"
            >
              NEXT →
            </motion.button>
          </Link>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default GateGeneralInstruction;
