import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const NimcetNotes = ({ user }) => {
  return (
    <div className="w-full overflow-x-hidden bg-slate-50">
      <Navbar user={user} />

      <section className="py-14 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          NIMCET Exam Notes
        </motion.h1>

        <div className="max-w-6xl mx-auto space-y-14">

          {/* ================= MATHEMATICS ================= */}
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-600">
            <h2 className="text-2xl font-semibold mb-6">
              Mathematics for NIMCET
            </h2>

            <div className="space-y-6 text-gray-700">

              <div>
                <h3 className="font-semibold text-lg mb-2">Algebra</h3>
                <ul className="space-y-2">
                  <li>Quadratic Equation: ax² + bx + c = 0</li>
                  <li>Roots: x = [−b ± √(b² − 4ac)] / 2a</li>
                  <li>AP nth term: aₙ = a + (n − 1)d</li>
                  <li>GP nth term: aₙ = arⁿ⁻¹</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Geometry</h3>
                <ul className="space-y-2">
                  <li>Area of Circle: πr²</li>
                  <li>Triangle Area: ½bh</li>
                  <li>Rectangle Area: l × b</li>
                  <li>Pythagoras: a² + b² = c²</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Trigonometry</h3>
                <ul className="space-y-2">
                  <li>sinθ = P/H</li>
                  <li>cosθ = B/H</li>
                  <li>tanθ = sinθ / cosθ</li>
                  <li>sin²θ + cos²θ = 1</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Coordinate Geometry</h3>
                <ul className="space-y-2">
                  <li>
                    Distance: √[(x₂ − x₁)² + (y₂ − y₁)²]
                  </li>
                  <li>
                    Midpoint: ((x₁ + x₂)/2 , (y₁ + y₂)/2)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Probability</h3>
                <ul className="space-y-2">
                  <li>
                    P(A) = Favorable Outcomes / Total Outcomes
                  </li>
                  <li>0 ≤ P(A) ≤ 1</li>
                </ul>
              </div>

            </div>

            <div className="mt-6 bg-blue-50 p-4 rounded-lg text-sm">
              🔹 <b>Tip:</b> NIMCET maths me speed + accuracy dono important hai
            </div>
          </div>

          {/* ================= REASONING ================= */}
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-600">
            <h2 className="text-2xl font-semibold mb-6">
              Logical Reasoning
            </h2>

            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-2">Number Series</h3>
                <ul className="space-y-2">
                  <li>AP: aₙ = a + (n − 1)d</li>
                  <li>GP: aₙ = arⁿ⁻¹</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Blood Relations</h3>
                <ul className="space-y-2">
                  <li>Father’s brother → Uncle</li>
                  <li>Mother’s sister → Aunt</li>
                  <li>Grandfather → Father’s father</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Clock Problems</h3>
                <ul className="space-y-2">
                  <li>
                    Angle = |30H − (11/2)M|
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Direction Sense</h3>
                <ul className="space-y-2">
                  <li>Right turn = 90° clockwise</li>
                  <li>Left turn = 90° anticlockwise</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-green-50 p-4 rounded-lg text-sm">
              🔹 <b>Tip:</b> Diagram bana ke questions solve karo
            </div>
          </div>

          {/* ================= COMPUTER SCIENCE ================= */}
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-purple-600">
            <h2 className="text-2xl font-semibold mb-6">
              Computer Science
            </h2>

            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-2">Computer Networks</h3>
                <ul className="space-y-2">
                  <li>OSI Model – 7 Layers</li>
                  <li>TCP vs UDP</li>
                  <li>IPv4 vs IPv6</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Data Structures</h3>
                <ul className="space-y-2">
                  <li>Array – Indexed collection</li>
                  <li>Stack – LIFO</li>
                  <li>Queue – FIFO</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Operating Systems</h3>
                <ul className="space-y-2">
                  <li>Process & Thread</li>
                  <li>PCB</li>
                  <li>Memory Management</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">DBMS</h3>
                <ul className="space-y-2">
                  <li>SQL Queries</li>
                  <li>Normalization</li>
                  <li>Primary vs Foreign Key</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ================= ENGLISH ================= */}
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-pink-600">
            <h2 className="text-2xl font-semibold mb-6">
              English
            </h2>

            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Grammar
                </h3>
                <ul className="space-y-2">
                  <li>Subject–Verb Agreement</li>
                  <li>Tenses</li>
                  <li>Articles (a, an, the)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Vocabulary
                </h3>
                <ul className="space-y-2">
                  <li>Synonyms</li>
                  <li>Antonyms</li>
                  <li>Idioms & Phrases</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Reading Comprehension
                </h3>
                <ul className="space-y-2">
                  <li>Skimming</li>
                  <li>Scanning</li>
                  <li>Inference</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NimcetNotes;
