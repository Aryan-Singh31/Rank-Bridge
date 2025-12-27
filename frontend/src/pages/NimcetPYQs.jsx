import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Download, FileText } from "lucide-react";

// ===== SAME DATA (logic untouched) =====
const pyqItems = [
  { subject: "NIMCET PYQ", year: 2024, link: "/PDF/2024ni.pdf" },
  { subject: "NIMCET PYQ", year: 2023, link: "/PDF/2023ni.pdf" },
  { subject: "NIMCET PYQ", year: 2022, link: "/PDF/2022ni.pdf" },
  { subject: "NIMCET PYQ", year: 2021, link: "/PDF/2021ni.pdf" },
  { subject: "NIMCET PYQ", year: 2020, link: "/PDF/2020ni.pdf" },
  { subject: "NIMCET PYQ", year: 2019, link: "/PDF/2019ni.pdf" },
  { subject: "NIMCET PYQ", year: 2018, link: "/PDF/2018ni.pdf" },
  { subject: "NIMCET PYQ", year: 2017, link: "/PDF/2017ni.pdf" },
];

const NimcetPYQs = ({ user }) => {
  return (
    <div className="w-full overflow-x-hidden bg-slate-900 text-white">
      <Navbar user={user} />

      {/* ================= HEADER ================= */}
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
          <FileText className="text-blue-400" size={36} />
          NIMCET Previous Year Questions
        </h1>
        <p className="text-gray-300 mt-2">
          Download year-wise official NIMCET PYQs
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
              whileHover={{ scale: 1.02 }}
              className="bg-white text-black rounded-xl p-5 flex items-center justify-between shadow-md hover:bg-blue-50 transition"
            >
              <span className="font-semibold text-lg">
                {item.subject} ({item.year})
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
            </motion.li>
          ))}
        </motion.ul>
      </section>

      <Footer />
    </div>
  );
};

export default NimcetPYQs;
