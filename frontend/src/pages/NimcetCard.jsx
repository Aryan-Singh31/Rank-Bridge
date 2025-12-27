import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Calculator, Brain, Monitor, BookOpen } from "lucide-react";

const NimcetCard = ({ user }) => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar user={user} />

      {/* ================= MAIN CONTENT ================= */}
      <section
        className="py-16 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bgim.jpg')" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 place-items-center">

          {/* ================= MATHEMATICS ================= */}
          <div className="relative group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/images/math.jpg"
              alt="Mathematics"
              className="w-[300px] h-[300px] rounded-[40px] border-2 border-black shadow-xl"
            />

            <div className="absolute top-0 left-full ml-3 hidden group-hover:block bg-sky-50 border shadow-lg rounded-lg min-w-[260px] z-50">
              {[
                { t: "Algebra", l: "https://www.youtube.com/watch?v=zWfdM4bK1ss" },
                { t: "Calculus", l: "https://www.youtube.com/watch?v=8qKNiafafkc" },
                { t: "Probability", l: "https://www.youtube.com/watch?v=jFPsFvB3NGY" },
                { t: "Trigonometry", l: "https://www.youtube.com/watch?v=effWeFEizQw" },
                { t: "Set Theory", l: "https://www.youtube.com/watch?v=Ql8wf15KD0Y" },
                { t: "Relation & Function", l: "https://www.youtube.com/watch?v=l-wIvS6mDl4" },
                { t: "Quadratic", l: "https://www.youtube.com/watch?v=hWX351vgRRc" },
                { t: "Integration", l: "https://www.youtube.com/watch?v=PYkBS-R95rQ" },
                { t: "Differentiation", l: "https://www.youtube.com/watch?v=i1Dpns59p24" },
                { t: "Statics", l: "https://www.youtube.com/watch?v=QHcbiokBrME" },
                { t: "Coordinate Geometry", l: "https://www.youtube.com/watch?v=-DvIPwSlXV4" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.l}
                  target="_blank"
                  className="block px-4 py-2 hover:bg-black hover:text-white"
                >
                  {item.t}
                </a>
              ))}
            </div>
          </div>

          {/* ================= REASONING ================= */}
          <div className="relative group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/images/reas.png"
              alt="Reasoning"
              className="w-[300px] h-[300px] rounded-[40px] border-2 border-black shadow-xl"
            />

            <div className="absolute top-0 right-full mr-3 hidden group-hover:block bg-sky-50 border shadow-lg rounded-lg min-w-[240px] z-50">
              {[
                "Verbal Reasoning",
                "Non-Verbal Reasoning",
                "Critical Thinking",
              ].map((t, i) => (
                <a
                  key={i}
                  href="https://www.youtube.com/watch?v=oGgEs-yfbLw"
                  target="_blank"
                  className="block px-4 py-2 hover:bg-black hover:text-white"
                >
                  {t}
                </a>
              ))}
            </div>
          </div>

          {/* ================= ENGLISH ================= */}
          <div className="relative group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/images/eng.webp"
              alt="English"
              className="w-[300px] h-[300px] rounded-[40px] border-2 border-black shadow-xl"
            />

            <div className="absolute top-0 left-full ml-3 hidden group-hover:block bg-sky-50 border shadow-lg rounded-lg min-w-[260px] z-50">
              {[
                "Tenses",
                "Active & Passive Voice",
                "Direct & Indirect Speech",
                "Synonym & Antonym",
                "Comprehension",
                "Error Correction",
                "Vocabulary",
              ].map((t, i) => (
                <a
                  key={i}
                  href="#"
                  className="block px-4 py-2 hover:bg-black hover:text-white"
                >
                  {t}
                </a>
              ))}
            </div>
          </div>

          {/* ================= COMPUTER ================= */}
          <div className="relative group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/images/comp.jpg"
              alt="Computer"
              className="w-[300px] h-[300px] rounded-[40px] border-2 border-black shadow-xl"
            />

            <div className="absolute top-0 right-full mr-3 hidden group-hover:block bg-sky-50 border shadow-lg rounded-lg min-w-[240px] z-50">
              {[
                "Operating System",
                "Boolean Algebra",
                "Logic Gate",
                "K-Map",
                "Number Conversion",
              ].map((t, i) => (
                <a
                  key={i}
                  href="#"
                  className="block px-4 py-2 hover:bg-black hover:text-white"
                >
                  {t}
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NimcetCard;
