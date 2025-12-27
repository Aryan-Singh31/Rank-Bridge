import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Download, BookOpen } from "lucide-react";

const pyqSubjects = {
  Mathematics: [
    { year: 2024, link: "/PDF/mathsupsc2024.pdf" },
    { year: 2023, link: "/PDF/mathsupsc2024.pdf" },
    { year: 2022, link: "/PDF/mathsupsc2024.pdf" },
  ],
  Physics: [
    { year: 2024, link: "/PDF/physicsupsc2024.pdf" },
    { year: 2023, link: "/PDF/physicsupsc2024.pdf" },
  ],
  Chemistry: [
    { year: 2024, link: "/PDF/chemupsc2024.pdf" },
    { year: 2023, link: "/PDF/chemupsc2024.pdf" },
  ],
  English: [
    { year: 2024, link: "/PDF/engupsc2024.pdf" },
    { year: 2023, link: "/PDF/engupsc2024.pdf" },
  ],
  "General Studies": [
    { year: 2024, link: "/PDF/gsupsc2024.pdf" },
    { year: 2023, link: "/PDF/gsupsc2024.pdf" },
  ],
  Geography: [
    { year: 2024, link: "/PDF/geography.pdf" },
    { year: 2023, link: "/PDF/geography.pdf" },
  ],
  History: [
    { year: 2024, link: "/PDF/history.pdf" },
    { year: 2023, link: "/PDF/history.pdf" },
  ],
  Economics: [
    { year: 2024, link: "/PDF/ecoupsc.pdf" },
    { year: 2023, link: "/PDF/ecoupsc.pdf" },
  ],
};

const UpscPYQs = ({ user }) => {
  return (
    <div className="w-full overflow-x-hidden bg-[#140f0c] text-white">
      <Navbar user={user} />

      {/* ================= HEADER ================= */}
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
          <BookOpen className="text-blue-400" size={36} />
          UPSC Previous Year Questions
        </h1>
        <p className="text-gray-300 mt-2">
          Subject-wise PYQs with direct PDF downloads
        </p>
      </section>

      {/* ================= PYQ CONTENT ================= */}
      <section className="max-w-5xl mx-auto px-4 space-y-12 pb-16">
        {Object.keys(pyqSubjects).map((subject, idx) => (
          <motion.div
            key={subject}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            viewport={{ once: true }}
            className="bg-[#193f64] rounded-xl p-6 shadow-[0_0_0_4px_rgba(255,0,0,0.5)] animate-pulse"
          >
            <h2 className="text-2xl font-semibold text-center mb-6">
              Previous Year Questions – {subject}
            </h2>

            <ul className="space-y-4">
              {pyqSubjects[subject].map((item, i) => (
                <li
                  key={i}
                  className="bg-white text-black rounded-lg p-4 flex justify-between items-center hover:bg-blue-50 transition"
                >
                  <span className="font-medium">
                    {subject} PYQ ({item.year})
                  </span>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 font-semibold hover:underline"
                  >
                    <Download size={18} />
                    Download
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default UpscPYQs;
