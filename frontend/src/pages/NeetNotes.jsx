import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const NeetNotes = ({ user }) => {
  return (
    <div className="w-full overflow-x-hidden bg-slate-50">
      <Navbar user={user} />

      <section className="py-14 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          NEET Exam Notes
        </motion.h1>

        <div className="max-w-6xl mx-auto space-y-12">

          {/* ================= PHYSICS ================= */}
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-600">
            <h2 className="text-2xl font-semibold mb-6">
              Physics Formulae
            </h2>

            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-2">Mechanics</h3>
                <ul className="space-y-2">
                  <li>Projectile Motion: H = (u²sin²θ)/(2g)</li>
                  <li>Range: R = (u²sin2θ)/g</li>
                  <li>Work Energy: W = ½m(v² − u²)</li>
                  <li>Centripetal Force: F = mv²/r</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Electrodynamics</h3>
                <ul className="space-y-2">
                  <li>Gauss Law: ∮E·dA = Q/ε₀</li>
                  <li>Faraday Law: ε = −dΦ/dt</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Modern Physics</h3>
                <ul className="space-y-2">
                  <li>Photoelectric Effect: hν = φ + ½mv²</li>
                  <li>Bohr Energy Levels: Eₙ = −13.6Z²/n² eV</li>
                  <li>De Broglie: λ = h/(mv)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Thermodynamics</h3>
                <ul className="space-y-2">
                  <li>First Law: ΔU = Q − W</li>
                  <li>Stefan Law: P = εσAT⁴</li>
                  <li>Carnot Efficiency: η = 1 − T₂/T₁</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 p-4 rounded-lg text-sm">
              🔹 <b>Tip:</b> Physics me diagram + units par special focus rakho
            </div>
          </div>

          {/* ================= CHEMISTRY ================= */}
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-600">
            <h2 className="text-2xl font-semibold mb-6">
              Chemistry Notes
            </h2>

            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-2">Physical Chemistry</h3>
                <ul className="space-y-2">
                  <li>VSEPR Shapes: Linear, Trigonal, Tetrahedral</li>
                  <li>Nernst Equation: E = E° − (RT/nF) lnQ</li>
                  <li>Raoult Law: P = X₁P₁°</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Organic Chemistry</h3>
                <ul className="space-y-2">
                  <li>Clemmensen Reduction</li>
                  <li>Hoffmann Bromamide Reaction</li>
                  <li>Stereoisomerism & Optical Activity</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Inorganic Chemistry</h3>
                <ul className="space-y-2">
                  <li>Coordination Compounds (CFSE)</li>
                  <li>Periodic Trends</li>
                  <li>Electron Gain Enthalpy</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-green-50 p-4 rounded-lg text-sm">
              🔹 <b>Tip:</b> NCERT line-by-line revise karo
            </div>
          </div>

          {/* ================= BIOLOGY ================= */}
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-pink-600">
            <h2 className="text-2xl font-semibold mb-6">
              Biology Notes
            </h2>

            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-2">Cell Structure</h3>
                <ul className="space-y-2">
                  <li>Cell Theory</li>
                  <li>Prokaryotic vs Eukaryotic</li>
                  <li>Mitochondria – ATP factory</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Genetics</h3>
                <ul className="space-y-2">
                  <li>Mendel’s Laws</li>
                  <li>Mutation</li>
                  <li>DNA → RNA → Protein</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Human Physiology</h3>
                <ul className="space-y-2">
                  <li>Digestive Enzymes</li>
                  <li>Respiratory System</li>
                  <li>Circulatory System</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-pink-50 p-4 rounded-lg text-sm">
              🔹 <b>Tip:</b> Diagrams + labeling practice compulsory
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NeetNotes;
