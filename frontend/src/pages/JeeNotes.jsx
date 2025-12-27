import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const JeeNotes = ({ user }) => {
  return (
    <div className="w-full overflow-x-hidden bg-slate-50">
      <Navbar user={user} />

      <section className="py-14 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          JEE Mains Notes
        </motion.h1>

        <div className="max-w-6xl mx-auto space-y-10">

          {/* ================= PHYSICS ================= */}
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-600">
            <h2 className="text-2xl font-semibold mb-6">
              1. Physics Formulae
            </h2>

            {/* Mechanics */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Mechanics</h3>
              <ul className="space-y-3 text-gray-700">
                <li><b>Projectile Motion:</b>  
                  H = (u² sin²θ)/(2g), R = (u² sin2θ)/g
                </li>
                <li><b>Work Energy:</b> W = ½m(v² − u²)</li>
                <li><b>Circular Motion:</b> F = mv²/r = mω²r</li>
              </ul>
            </div>

            {/* Electrodynamics */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Electrodynamics</h3>
              <ul className="space-y-3 text-gray-700">
                <li>Gauss Law: ∮E·dA = Q/ε₀</li>
                <li>Faraday Law: ε = −dΦ/dt</li>
              </ul>
            </div>

            {/* Modern Physics */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Modern Physics</h3>
              <ul className="space-y-3 text-gray-700">
                <li>Photoelectric Effect: hν = φ + ½mv²</li>
                <li>Bohr Radius: rₙ = (n²h²)/(4π²mZe²)</li>
                <li>De Broglie: λ = h/(mv)</li>
              </ul>
            </div>

            {/* Thermodynamics */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Thermodynamics</h3>
              <ul className="space-y-3 text-gray-700">
                <li>ΔU = Q − W</li>
                <li>Conduction: Q/t = kAΔT/d</li>
                <li>Carnot Efficiency: η = 1 − T₂/T₁</li>
              </ul>
            </div>

            {/* Optics */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Optics</h3>
              <ul className="space-y-3 text-gray-700">
                <li>Lens Formula: 1/f = (μ−1)(1/R₁ − 1/R₂)</li>
                <li>YDSE: β = λD/d</li>
                <li>Snell Law: μ₁ sinθ₁ = μ₂ sinθ₂</li>
              </ul>
            </div>
          </div>

          {/* ================= CHEMISTRY ================= */}
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-600">
            <h2 className="text-2xl font-semibold mb-6">
              2. Chemistry Notes
            </h2>

            <ul className="space-y-4 text-gray-700">
              <li><b>Electrochemistry:</b> E = E° − (RT/nF) lnQ</li>
              <li><b>Named Reactions:</b> Clemmensen, Hoffmann</li>
              <li><b>Coordination:</b> CFSE, Werner Theory</li>
              <li><b>Periodic Trends:</b> IE ↑ across period</li>
            </ul>
          </div>

          {/* ================= MATHEMATICS ================= */}
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-purple-600">
            <h2 className="text-2xl font-semibold mb-6">
              3. Mathematics Formulae
            </h2>

            <ul className="space-y-4 text-gray-700">
              <li>Integration by Parts</li>
              <li>Differential Equations</li>
              <li>Ellipse & Hyperbola</li>
              <li>Vectors & 3D Geometry</li>
              <li>Trigonometry Identities</li>
              <li>Quadratic & Binomial Theorem</li>
            </ul>
          </div>

          {/* ================= PREP TIPS ================= */}
          <div className="bg-yellow-50 p-8 rounded-xl shadow-md border-l-4 border-yellow-500">
            <h3 className="text-2xl font-semibold mb-6">
              JEE Preparation Strategies
            </h3>

            <ul className="space-y-4 text-gray-800">
              <li>Focus on Calculus & Mechanics</li>
              <li>Memorize standard integrals</li>
              <li>Avoid sign & unit mistakes</li>
            </ul>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JeeNotes;
