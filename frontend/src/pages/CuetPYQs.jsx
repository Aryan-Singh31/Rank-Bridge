import { motion } from "framer-motion";
import { Download, BookOpen } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CuetPYQs = ({ user }) => {
  // 🔒 LOGIC SAME (as you said — not touched)
  const pyqSubjects = {
    Mathematics: [
      { year: 2024, link: "/PDF/2024jan.pdf" },
      { year: 2023, link: "/PDF/2023.pdf" },
      { year: 2022, link: "/PDF/2022.pdf" },
    ],
    Physics: [
      { year: 2024, link: "/PDF/2024jan.pdf" },
      { year: 2023, link: "/PDF/2023.pdf" },
      { year: 2022, link: "/PDF/2022.pdf" },
    ],
    Chemistry: [
      { year: 2024, link: "/PDF/2024jan.pdf" },
      { year: 2023, link: "/PDF/2023.pdf" },
    ],
    English: [
      { year: 2024, link: "/PDF/2024jan.pdf" },
      { year: 2023, link: "/PDF/2023.pdf" },
    ],
    "General Test": [
      { year: 2024, link: "/PDF/2024jan.pdf" },
      { year: 2023, link: "/PDF/2023.pdf" },
    ],
    Biology: [
      { year: 2024, link: "/PDF/2024jan.pdf" },
      { year: 2023, link: "/PDF/2023.pdf" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      <Navbar user={user} />

      {/* ================= HEADER ================= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-16 px-4"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          CUET Previous Year Questions
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Subject-wise PYQs with downloadable papers to boost your CUET
          preparation
        </p>
      </motion.div>

      {/* ================= PYQ SECTIONS ================= */}
      <div className="max-w-6xl mx-auto px-6 pb-20 space-y-16">
        {Object.keys(pyqSubjects).map((subject, idx) => (
          <motion.div
            key={subject}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-8"
          >
            {/* Subject Heading */}
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-blue-400" size={28} />
              <h2 className="text-2xl md:text-3xl font-bold">
                {subject}
              </h2>
            </div>

            {/* PYQ LIST */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pyqSubjects[subject].map((paper, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-slate-900 border border-slate-700 rounded-xl p-5 flex items-center justify-between hover:border-blue-500 transition"
                >
                  <div>
                    <p className="font-semibold text-lg">
                      {paper.year} PYQ
                    </p>
                    <p className="text-sm text-gray-400">
                      {subject}
                    </p>
                  </div>

                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition"
                  >
                    <Download size={18} />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default CuetPYQs;
