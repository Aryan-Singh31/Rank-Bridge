import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const UpscCard = ({ user }) => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar user={user} />

      {/* ================= MAIN SECTION ================= */}
      <section
        className="py-16 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bgim.jpg')" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 place-items-center">

          {/* ================= GENERAL STUDIES ================= */}
          <div className="relative group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/images/gs.jpeg"
              alt="General Studies"
              className="w-[300px] h-[300px] rounded-[40px] border-2 border-black shadow-xl"
            />
            <div className="absolute top-0 left-full ml-3 hidden group-hover:block bg-sky-50 border shadow-lg rounded-lg min-w-[280px] z-50">
              {[
                ["History of India", "https://www.youtube.com/watch?v=eHEv5aF5td8"],
                ["Indian Polity & Governance", "https://www.youtube.com/watch?v=jUKCSfptvdA"],
                ["Economic & Social Development", "https://www.youtube.com/watch?v=a__t1YpTx_o"],
              ].map(([t, l], i) => (
                <a key={i} href={l} target="_blank"
                   className="block px-4 py-2 hover:bg-black hover:text-white">
                  {t}
                </a>
              ))}
            </div>
          </div>

          {/* ================= GEOGRAPHY ================= */}
          <div className="relative group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/images/geo.jpeg"
              alt="Geography"
              className="w-[300px] h-[300px] rounded-[40px] border-2 border-black shadow-xl"
            />
            <div className="absolute top-0 right-full mr-3 hidden group-hover:block bg-sky-50 border shadow-lg rounded-lg min-w-[260px] z-50">
              {[
                ["Climatology", "https://www.youtube.com/watch?v=NOzJw8WBl_g"],
                ["Geomorphology", "https://www.youtube.com/watch?v=BKPuaSTOHYw"],
                ["Oceanography", "https://www.youtube.com/watch?v=leq_5jqcPZ0"],
                ["Geography of India", "https://www.youtube.com/watch?v=UyqZ097lrZM"],
              ].map(([t, l], i) => (
                <a key={i} href={l} target="_blank"
                   className="block px-4 py-2 hover:bg-black hover:text-white">
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
                <a key={i}
                   href="https://www.youtube.com/watch?v=-X9G-f2MLTM"
                   target="_blank"
                   className="block px-4 py-2 hover:bg-black hover:text-white">
                  {t}
                </a>
              ))}
            </div>
          </div>

          {/* ================= CHEMISTRY ================= */}
          <div className="relative group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/images/chemistry.jpg"
              alt="Chemistry"
              className="w-[300px] h-[300px] rounded-[40px] border-2 border-black shadow-xl"
            />
            <div className="absolute top-0 right-full mr-3 hidden group-hover:block bg-sky-50 border shadow-lg rounded-lg min-w-[280px] z-50">
              {[
                "Atomic Structure",
                "Chemical Bonding",
                "Solid State",
                "Gaseous State",
                "Thermodynamics",
                "Organic Chemistry",
              ].map((t, i) => (
                <a key={i}
                   href="https://www.youtube.com/watch?v=UyYlH8n8Uyg"
                   target="_blank"
                   className="block px-4 py-2 hover:bg-black hover:text-white">
                  {t}
                </a>
              ))}
            </div>
          </div>

          {/* ================= MATHEMATICS ================= */}
          <div className="relative group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/images/math.jpg"
              alt="Mathematics"
              className="w-[300px] h-[300px] rounded-[40px] border-2 border-black shadow-xl"
            />
            <div className="absolute top-0 left-full ml-3 hidden group-hover:block bg-sky-50 border shadow-lg rounded-lg min-w-[300px] z-50">
              {[
                "Linear Algebra",
                "Calculus",
                "Differential Equation",
                "Real Analysis",
                "Complex Analysis",
                "Group Theory",
              ].map((t, i) => (
                <a key={i}
                   href="https://www.youtube.com/watch?v=Enr8VhehduE"
                   target="_blank"
                   className="block px-4 py-2 hover:bg-black hover:text-white">
                  {t}
                </a>
              ))}
            </div>
          </div>

          {/* ================= HINDI ================= */}
          <div className="relative group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/images/hindi.jpeg"
              alt="Hindi"
              className="w-[300px] h-[300px] rounded-[40px] border-2 border-black shadow-xl"
            />
            <div className="absolute top-0 right-full mr-3 hidden group-hover:block bg-sky-50 border shadow-lg rounded-lg min-w-[260px] z-50">
              {[
                ["History of Hindi Sahitya", "https://www.youtube.com/watch?v=UmRan1moE7Y"],
                ["Hindi Lipi", "https://www.youtube.com/watch?v=UmRan1moE7Y"],
                ["Idioms & Phrases", "https://www.youtube.com/watch?v=wnr27b3gUjI"],
                ["Essay Writing Tips", "https://www.youtube.com/shorts/RYcMqi7BrXM"],
              ].map(([t, l], i) => (
                <a key={i} href={l} target="_blank"
                   className="block px-4 py-2 hover:bg-black hover:text-white">
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

export default UpscCard;
