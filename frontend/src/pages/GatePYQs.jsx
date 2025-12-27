import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Download, FileText } from "lucide-react";

/* ===== SAME DATA (LOGIC UNCHANGED) ===== */
const pyqSubjects = {
  "Computer Science": [
    { year: 2024, link: "/PDF/gatecs2024.pdf" },
    { year: 2023, link: "/PDF/gatecs2023.pdf" },
    { year: 2022, link: "/PDF/gatecs2021.pdf" },
    { year: 2021, link: "/PDF/gatecs2021.pdf" },
  ],
  Civil: [
    { year: 2022, link: "/PDF/gatecivil2024.pdf" },
    { year: 2023, link: "/PDF/gatecivil2023.pdf" },
    { year: 2023, link: "/PDF/gatecivil2024.pdf" },
    { year: 2024, link: "/PDF/gatecivil2024.pdf" },
  ],
  Mechanical: [
    { year: 2024, link: "/PDF/gateme2024.pdf" },
    { year: 2023, link: "/PDF/gateme2022.pdf" },
    { year: 2024, link: "/PDF/gateme2024.pdf" },
  ],
  Agriculture: [
    { year: 2024, link: "/20PDF/gateagri2024.pdf" },
    { year: 2023, link: "/20PDF/gateagri2022.pdf" },
    { year: 2023, link: "/20PDF/gateagri2024.pdf" },
  ],
  Electrical: [
    { year: 2024, link: "/PDF/gatega2023.pdf" },
    { year: 2023, link: "/PDF/gatega2021.pdf" },
    { year: 2023, link: "/PDF/gatega2021.pdf" },
  ],
  Metallurgy: [
    { year: 2024, link: "/PDF/gatega2021.pdf" },
    { year: 2023, link: "/PDF/gatega2021.pdf" },
    { year: 2023, link: "/PDF/gatega2021.pdf" },
  ],
};

const GatePYQs = ({ user }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar user={user} />

      {/* ================= HEADER ================= */}
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
          <FileText size={36} className="text-indigo-400" />
          GATE Previous Year Questions
        </h1>
        <p className="text-gray-300 mt-2">
          Branch-wise PYQs for GATE aspirants
        </p>
      </section>

      {/* ================= PYQ SECTIONS ================= */}
      <section className="max-w-5xl mx-auto px-4 pb-16 space-y-14">
        {Object.keys(pyqSubjects).map((subject, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-xl border border-indigo-500/30 bg-slate-800 p-6 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-center mb-6 text-indigo-300">
              Previous Year Questions ({subject})
            </h2>

            <ul className="space-y-4">
              {pyqSubjects[subject].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white text-black rounded-lg p-4 flex items-center justify-between shadow hover:bg-indigo-50 transition"
                >
                  <span className="font-semibold">
                    {subject} PYQ ({item.year})
                  </span>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-indigo-600 font-semibold hover:underline"
                  >
                    <Download size={18} />
                    Download
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default GatePYQs;
