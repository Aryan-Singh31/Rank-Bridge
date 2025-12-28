import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Download, FileText } from "lucide-react";

// ===== SAME DATA (NO LOGIC CHANGE) =====
const pyqItems = [
  { subject: "JEE PYQ (January)", year: 2024, link: "/PDF/2024jan.pdf" },
  { subject: "JEE PYQ (April)", year: 2024, link: "/PDF/2024april.pdf" },

  { subject: "JEE PYQ (January)", year: 2023, link: "/PDF/2023jan.pdf" },
  { subject: "JEE PYQ (April)", year: 2023, link: "/PDF/2023april.pdf" },

  { subject: "JEE PYQ (January)", year: 2022, link: "/PDF/2022april.pdf" },
  { subject: "JEE PYQ (April)", year: 2022, link: "/PDF/2023jan.pdf" },

  { subject: "JEE PYQ (January)", year: 2021, link: "/PDF/2021april.pdf" },
  { subject: "JEE PYQ (April)", year: 2021, link: "/PDF/2021jan.pdf" },

  { subject: "JEE PYQ (January)", year: 2020, link: "/PDF/2020jan.pdf" },
  { subject: "JEE PYQ (April)", year: 2020, link: "/PDF/2020jan.pdf" },

  { subject: "JEE PYQ (January)", year: 2019, link: "/PDF/2019jan.pdf" },
  { subject: "JEE PYQ (April)", year: 2019, link: "/PDF/2020jan.pdf" },

  { subject: "JEE PYQ (January)", year: 2018, link: "/PDF/2018april.pdf" },
  { subject: "JEE PYQ (April)", year: 2018, link: "/PDF/2018april.pdf" },

  { subject: "JEE PYQ (January)", year: 2017, link: "/PDF/2018april.pdf" },
  { subject: "JEE PYQ (April)", year: 2017, link: "/PDF/2017april.pdf" },
];

const JeePYQs = ({ user }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar user={user} />

      {/* ================= HEADER ================= */}
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
          <FileText size={36} className="text-orange-400" />
          JEE Previous Year Questions
        </h1>
        <p className="text-gray-300 mt-2">
          Session-wise JEE Main PYQs (January & April)
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
              className="bg-white text-black rounded-xl p-5 flex items-center justify-between shadow-md hover:bg-orange-50 transition"
            >
              <span className="font-semibold text-lg">
                {item.subject} ({item.year})
              </span>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-orange-600 font-semibold hover:underline"
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

export default JeePYQs;
