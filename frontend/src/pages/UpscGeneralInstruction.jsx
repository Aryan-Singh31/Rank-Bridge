import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UpscGeneralInstruction = ({ user }) => {
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
        UPSC CSE – Marks Distribution & Instructions
      </motion.h1>

      {/* ===== MARKS IMAGE ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex justify-center mt-6"
      >
        <img
          src="/images/upscgeneralinst.png"
          alt="UPSC Marks Distribution"
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

        <p className="text-gray-700 mb-4 leading-relaxed">
          The examination timer will be controlled by the server. Once the timer
          ends, your test will be automatically submitted.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><span className="font-bold text-red-500">1</span> – Question not visited</li>
          <li><span className="font-bold text-red-500">3</span> – Not answered</li>
          <li><span className="font-bold text-green-600">4</span> – Answered</li>
          <li><span className="font-bold text-yellow-600">6</span> – Marked for review</li>
          <li><span className="font-bold text-blue-600">9</span> – Answered & marked for review</li>
        </ul>

        <p className="mt-4 text-gray-700">
          Answers marked for review will still be considered if an option is selected.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
          Navigating & Answering
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Click question number to navigate.</li>
          <li>Use <strong>Save & Next</strong> to save answer.</li>
          <li>Use <strong>Mark for Review & Next</strong> if unsure.</li>
        </ul>

        <p className="mt-4 text-gray-700">
          <strong>Negative Marking:</strong> As per UPSC rules.
        </p>

        <p className="text-green-600 font-semibold">
          No penalty for unanswered questions.
        </p>

        {/* ===== NEXT BUTTON ===== */}
        <div className="flex justify-end mt-10">
          <Link to="/tests/upsc/mock/1">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow hover:bg-red-700 transition"
            >
              NEXT →
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
};

export default UpscGeneralInstruction;
