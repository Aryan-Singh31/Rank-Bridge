import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FileText, HeartPulse, FlaskConical, Leaf } from "lucide-react";

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const NeetNotes = ({ user }) => {
  return (
    <div className="w-full min-h-screen bg-slate-100">
      <Navbar user={user} />

      {/* ===== Header ===== */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">NEET Exam Notes</h1>
        <p className="mt-3 text-lg">
          Physics • Chemistry • Biology — Smart & Quick Revision
        </p>
      </section>

      {/* ===== Content ===== */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">

        {/* ===== Physics ===== */}
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-blue-600" />
            <h2 className="text-2xl font-bold">Physics</h2>
          </div>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Kinematics:</strong>  
              <span className="block text-sm">
                v = u + at, &nbsp; s = ut + ½at²
              </span>
            </li>
            <li>
              <strong>Newton’s Laws:</strong> F = ma
            </li>
            <li>
              <strong>Work–Energy:</strong> W = ΔKE
            </li>
            <li>
              <strong>Current Electricity:</strong> V = IR
            </li>
          </ul>
        </motion.section>

        {/* ===== Chemistry ===== */}
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <FlaskConical className="text-purple-600" />
            <h2 className="text-2xl font-bold">Chemistry</h2>
          </div>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Physical:</strong>  
              Nernst Equation, Electrochemistry
            </li>
            <li>
              <strong>Organic:</strong>  
              SN1, SN2, Named Reactions
            </li>
            <li>
              <strong>Inorganic:</strong>  
              Periodic Trends, Coordination Compounds
            </li>
          </ul>
        </motion.section>

        {/* ===== Biology ===== */}
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <Leaf className="text-green-600" />
            <h2 className="text-2xl font-bold">Biology</h2>
          </div>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Cell Biology:</strong> Cell organelles & functions
            </li>
            <li>
              <strong>Genetics:</strong> Mendel’s Laws, DNA & RNA
            </li>
            <li>
              <strong>Human Physiology:</strong> Digestion, Respiration, Circulation
            </li>
            <li>
              <strong>Ecology:</strong> Food chain, Environment
            </li>
          </ul>
        </motion.section>

        {/* ===== Tips ===== */}
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-emerald-50 border-l-4 border-emerald-500 rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-3">
            <HeartPulse className="text-emerald-600" />
            <h2 className="text-2xl font-bold text-emerald-700">
              NEET Preparation Tips
            </h2>
          </div>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>NCERT is 🔑 — revise multiple times</li>
            <li>Daily PYQ practice is mandatory</li>
            <li>Focus more on Biology (50% weightage)</li>
            <li>Mock tests + analysis every week</li>
          </ul>
        </motion.section>

      </div>

      <Footer />
    </div>
  );
};

export default NeetNotes;
