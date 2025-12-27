import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const GateNotes = ({ user }) => {
  return (
    <div className="w-full overflow-x-hidden bg-slate-50">
      <Navbar user={user} />

      {/* ================= HEADER ================= */}
      <section className="py-14 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          GATE Exam Notes
        </motion.h1>

        <div className="max-w-5xl mx-auto space-y-10">

          {/* ================= ENGINEERING MATHS ================= */}
          <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-blue-600">
            <h2 className="text-2xl font-semibold mb-6">
              1. Engineering Mathematics
            </h2>

            {/* Linear Algebra */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">
                Linear Algebra
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li><b>Matrix Rank:</b> rank(A) = Number of non-zero rows in REF</li>
                <li><b>Eigen Values:</b> |A − λI| = 0</li>
                <li><b>Determinants:</b> Det(A) = Product of Eigenvalues</li>
                <li><b>Inverse:</b> A⁻¹ = adj(A) / det(A)</li>
                <li>
                  <b>System of Equations:</b> Ax = b has a unique solution if  
                  rank(A) = rank(A|b) = n
                </li>
              </ul>
            </div>

            {/* Calculus */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Calculus
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li><b>Limit:</b> lim x→a f(x) = L</li>
                <li><b>Derivative:</b> d/dx [xⁿ] = n·xⁿ⁻¹</li>
                <li><b>Integration:</b> ∫ xⁿ dx = (xⁿ⁺¹)/(n+1) + C</li>
                <li><b>FTC:</b> d/dx ∫ f(t) dt = f(x)</li>
                <li>
                  <b>Taylor Series:</b> f(x) = f(a) + f'(a)(x−a) + …
                </li>
              </ul>
            </div>
          </div>

          {/* ================= COMPUTER SCIENCE ================= */}
          <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-green-600">
            <h2 className="text-2xl font-semibold mb-6">
              2. Computer Science
            </h2>

            <h3 className="text-xl font-semibold mb-4">
              Algorithms
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>
                <b>Time Complexity:</b>  
                Merge Sort → O(n log n), BFS/DFS → O(V + E)
              </li>
              <li>
                <b>Recurrence Relation:</b> T(n) = 2T(n/2) + O(n)
              </li>
              <li>
                <b>Sorting:</b> QuickSort → O(n²) worst, O(n log n) average
              </li>
              <li>
                <b>Graph:</b> Dijkstra → O((V + E) log V)
              </li>
              <li>
                <b>Dynamic Programming:</b> Fibonacci → O(n) with memoization
              </li>
            </ul>
          </div>

          {/* ================= PREPARATION TIPS ================= */}
          <div className="bg-emerald-50 rounded-xl shadow-md p-8 border-l-4 border-emerald-600">
            <h3 className="text-2xl font-semibold mb-6">
              GATE Preparation Tips
            </h3>

            <ul className="space-y-4 text-gray-800">
              <li>
                <b>Section Weightage:</b>  
                Technical 72% | Maths 15% | Aptitude 13%
              </li>
              <li>
                <b>Time Management:</b>  
                1-mark → 1.5 min | 2-mark → 3 min
              </li>
              <li>
                <b>Mock Tests:</b>  
                Attempt at least 10 full-length tests
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GateNotes;
