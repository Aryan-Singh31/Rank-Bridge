import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const UpscNotes = ({ user }) => {
  return (
    <div className="w-full overflow-x-hidden bg-slate-50">
      <Navbar user={user} />

      <section className="py-14 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          UPSC Civil Services Examination Notes
        </motion.h1>

        <div className="max-w-6xl mx-auto space-y-12">

          {/* ================= HISTORY ================= */}
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-orange-500">
            <h2 className="text-2xl font-semibold mb-4">History</h2>
            <ul className="space-y-2 text-gray-700">
              <li><b>Ancient:</b> Indus Valley, Vedic Age, Maurya & Gupta Empires</li>
              <li><b>Medieval:</b> Delhi Sultanate, Mughals, Bhakti & Sufi Movements</li>
              <li><b>Modern:</b> 1857 Revolt, Freedom Movement, Post-Independence India</li>
            </ul>
            <p className="mt-4 text-sm bg-orange-50 p-3 rounded">
              🔹 <b>Key Event:</b> 1857 – First War of Independence
            </p>
          </div>

          {/* ================= POLITY ================= */}
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-600">
            <h2 className="text-2xl font-semibold mb-4">Polity & Governance</h2>
            <ul className="space-y-2 text-gray-700">
              <li>Preamble, Fundamental Rights & Duties</li>
              <li>Parliament – Lok Sabha & Rajya Sabha</li>
              <li>Judiciary – Supreme Court & High Courts</li>
              <li>Centre-State Relations, Panchayati Raj</li>
            </ul>
            <p className="mt-4 text-sm bg-blue-50 p-3 rounded">
              🔹 <b>Important Article:</b> Article 32 – Right to Constitutional Remedies
            </p>
          </div>

          {/* ================= ECONOMY ================= */}
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-600">
            <h2 className="text-2xl font-semibold mb-4">Indian Economy</h2>
            <ul className="space-y-2 text-gray-700">
              <li>GDP, Inflation, Fiscal Deficit</li>
              <li>Monetary vs Fiscal Policy</li>
              <li>Five-Year Plans & Economic Reforms (1991 LPG)</li>
            </ul>
            <p className="mt-4 text-sm bg-green-50 p-3 rounded">
              🔹 <b>Formula:</b> GDP = C + I + G + (X − M)
            </p>
          </div>

          {/* ================= GEOGRAPHY ================= */}
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-teal-600">
            <h2 className="text-2xl font-semibold mb-4">Geography</h2>
            <ul className="space-y-2 text-gray-700">
              <li>Physical – Landforms, Climate, Ocean Currents</li>
              <li>Indian Geography – Himalayas, Rivers, Monsoon</li>
              <li>Human Geography – Population & Urbanization</li>
            </ul>
            <p className="mt-4 text-sm bg-teal-50 p-3 rounded">
              🔹 <b>Concept:</b> El Niño & its impact on Indian Monsoon
            </p>
          </div>

          {/* ================= SCIENCE & TECH ================= */}
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-purple-600">
            <h2 className="text-2xl font-semibold mb-4">Science & Technology</h2>
            <ul className="space-y-2 text-gray-700">
              <li>ISRO – Chandrayaan, Mangalyaan, Gaganyaan</li>
              <li>Biotechnology – DNA, Vaccines, CRISPR</li>
              <li>AI, Robotics, Machine Learning</li>
            </ul>
            <p className="mt-4 text-sm bg-purple-50 p-3 rounded">
              🔹 <b>Case Study:</b> COVID-19 Vaccine Development in India
            </p>
          </div>

          {/* ================= ENVIRONMENT ================= */}
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-lime-600">
            <h2 className="text-2xl font-semibold mb-4">Environment & Ecology</h2>
            <ul className="space-y-2 text-gray-700">
              <li>Climate Change & Global Warming</li>
              <li>Biodiversity & Wildlife Conservation</li>
              <li>Paris Agreement, Kyoto Protocol, COP Summits</li>
            </ul>
            <p className="mt-4 text-sm bg-lime-50 p-3 rounded">
              🔹 <b>Movement:</b> Chipko Movement – Community Forest Protection
            </p>
          </div>

          {/* ================= CURRENT AFFAIRS ================= */}
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-red-600">
            <h2 className="text-2xl font-semibold mb-4">Current Affairs</h2>
            <p className="text-gray-700">
              Daily current affairs from national & international events,
              government schemes, global organizations, and reports.
            </p>
            <p className="mt-4 text-sm bg-red-50 p-3 rounded">
              🔹 <b>Example:</b> India’s G20 Presidency – 2023
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UpscNotes;
