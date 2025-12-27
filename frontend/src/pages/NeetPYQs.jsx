import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Download, FileText } from "lucide-react";

// ===== SAME DATA (LOGIC UNCHANGED) =====
const pyqItems = [
  { subject: "NEET PYQ", year: 2024, link: "/PDF/2024neet.pdf" },
  { subject: "NEET PYQ", year: 2023, link: "/PDF/2023neet.pdf" },
  { subject: "NEET PYQ", year: 2022, link: "/PDF/2022neet.pdf" },
  { subject: "NEET PYQ", year: 2021, link: "/PDF/2022neet.pdf" },
  { subject: "NEET PYQ", year: 2020, link: "/PDF/2020neet.pdf" },
  { subject: "NEET PYQ", year: 2019, link: "/PDF/2019neet.pdf" },
  { subject: "NEET PYQ", year: 2018, link: "/PDF/2018neet.pdf" },
  { subject: "NEET PYQ", year: 2017, link: "/PDF/2017neet.pdf" },
];

const NeetPYQs = ({ user }) => {
  return (
    <div className="min-h-screen bg-emerald-900 text-white">
      <Navbar user={user} />

      {/* ================= HEADER ================= */}
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
          <FileText size={36} className="text-green-400" />
          NEET Previous Year Questions
        </h1>
        <p className="text-gray-200 mt-2">
          Year-wise NEET PYQs for Medical Aspirants
        </p>
      </section>

      {/* ================= PYQ LIST ================= */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          {pyqItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white text-black rounded-xl p-5 flex items-center justify-between shadow-md hover:bg-green-50 transition"
            >
              <span className="font-semibold text-lg">
                {item.subject} ({item.year})
              </span>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-600 font-semibold hover:underline"
              >
                <Download size={18} />
                Download
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      <Footer />
    </div>
  );
};

export default NeetPYQs;
