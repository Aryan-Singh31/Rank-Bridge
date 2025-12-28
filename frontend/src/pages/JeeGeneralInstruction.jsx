import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const JeeGeneralInstruction = ({ user }) => {
  return (
    <div className="w-full min-h-screen bg-slate-50">

      {/* ===== NAVBAR ===== */}
      <Navbar user={user} />

      {/* ===== PAGE TITLE ===== */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl md:text-3xl font-bold text-center mt-8"
      >
        Marks Distribution
      </motion.h1>

      {/* ===== MARKS IMAGE ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex justify-center mt-6"
      >
        <img
          src="/images/jeemainsmarksdistib.png"
          alt="JEE Marks Distribution"
          className="w-[90%] md:w-[75%] rounded-xl shadow-lg"
        />
      </motion.div>

      {/* ===== INSTRUCTIONS ===== */}
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
          The clock will be set at the server. The countdown timer in the top
          right corner of the screen will display the remaining time available
          to complete the examination. When the timer reaches zero, the exam
          will automatically end.
        </p>

        <p className="text-gray-700 mb-3">
          The Question Palette shows the status of each question:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><span className="font-bold text-red-500">1</span> – Not visited</li>
          <li><span className="font-bold text-red-500">3</span> – Not answered</li>
          <li><span className="font-bold text-green-600">4</span> – Answered</li>
          <li><span className="font-bold text-yellow-600">6</span> – Marked for review (not answered)</li>
          <li><span className="font-bold text-blue-600">9</span> – Answered & marked for review</li>
        </ul>

        <p className="mt-4 text-gray-700">
          Answered & marked-for-review questions will be considered for evaluation.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
          Navigating to a Question
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Click question number to jump directly.</li>
          <li>Click <strong>Save & Next</strong> to save your answer.</li>
          <li>Click <strong>Mark for Review & Next</strong> to revisit later.</li>
        </ul>

        <p className="mt-3 text-red-600 font-semibold">
          ⚠ If you don’t click Save & Next, your answer won’t be saved.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
          Answering a Question
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Select an option to answer.</li>
          <li>Click again to deselect or use Clear Response.</li>
          <li>You may change answers before submission.</li>
          <li>Marked-for-review answers are evaluated.</li>
        </ul>

        <p className="mt-4 text-gray-700">
          <strong>Negative Marking:</strong> 1/3rd marks deducted for wrong answers.
        </p>

        <p className="text-green-600 font-semibold">
          No negative marking for unanswered questions.
        </p>

        {/* ===== NEXT BUTTON ===== */}
        <div className="flex justify-end mt-10">
          <Link to="/tests/jee/mock/1">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow hover:bg-blue-700 transition"
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

export default JeeGeneralInstruction;
