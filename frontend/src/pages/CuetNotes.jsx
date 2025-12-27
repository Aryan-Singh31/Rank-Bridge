import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const CuetNotes = ({ user }) => {
  return (
    <div className="w-full min-h-screen bg-slate-100">

      {/* ================= NAVBAR ================= */}
      <Navbar user={user} />

      {/* ================= PAGE TITLE ================= */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-center mt-10 text-gray-800"
      >
        CUET UG Exam Notes
      </motion.h2>

      {/* ================= CONTENT ================= */}
      <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">

        {/* Mathematics */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600"
        >
          <h3 className="text-2xl font-semibold mb-4">Mathematics</h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Quadratic Equation:</strong> ax² + bx + c = 0</li>
            <li><strong>Roots:</strong> x = (-b ± √(b² - 4ac)) / 2a</li>
            <li><strong>Trigonometry:</strong> sinθ = P/H, cosθ = B/H</li>
            <li><strong>Integration:</strong> ∫ xⁿ dx = (xⁿ⁺¹)/(n+1) + C</li>
          </ul>
        </motion.div>

        {/* Physics */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-600"
        >
          <h3 className="text-2xl font-semibold mb-4">Physics</h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Newton’s Laws:</strong> F = ma</li>
            <li><strong>Kinematics:</strong> v = u + at, s = ut + ½at²</li>
            <li><strong>Work Energy:</strong> W = ΔKE</li>
            <li><strong>Lens Formula:</strong> 1/f = 1/v − 1/u</li>
          </ul>
        </motion.div>

        {/* Chemistry */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-600"
        >
          <h3 className="text-2xl font-semibold mb-4">Chemistry</h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Ideal Gas Law:</strong> PV = nRT</li>
            <li><strong>Mole Concept:</strong> Mass / Molar Mass</li>
            <li><strong>Periodic Trends:</strong> Atomic size ↑ down group</li>
            <li><strong>Organic Reactions:</strong> Addition, Substitution</li>
          </ul>
        </motion.div>

        {/* Logical Reasoning */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500"
        >
          <h3 className="text-2xl font-semibold mb-4">Logical Reasoning</h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Number Series:</strong> Identify pattern</li>
            <li><strong>Blood Relations:</strong> Family tree method</li>
            <li><strong>Puzzles:</strong> Logical arrangement</li>
          </ul>
        </motion.div>

        {/* English */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white p-6 rounded-xl shadow-md border-l-4 border-pink-500"
        >
          <h3 className="text-2xl font-semibold mb-4">
            English Language & Comprehension
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Reading:</strong> Identify main ideas</li>
            <li><strong>Grammar:</strong> Tenses, SVA</li>
            <li><strong>Vocabulary:</strong> Synonyms, Antonyms</li>
          </ul>
        </motion.div>

      </div>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
};

export default CuetNotes;
