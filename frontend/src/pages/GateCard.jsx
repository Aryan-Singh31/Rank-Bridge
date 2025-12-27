import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const GateCard = ({ user }) => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar user={user} />

      {/* ================= MAIN CONTENT ================= */}
      <section
        className="py-16 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bgim.jpg')" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 place-items-center">

          {/* ================= ENGINEERING MATHEMATICS ================= */}
          <div className="relative group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/images/engmat.jpeg"
              alt="Engineering Mathematics"
              className="w-[300px] h-[300px] rounded-[40px] border-2 border-black shadow-xl"
            />
            <div className="absolute top-0 left-full ml-3 hidden group-hover:block bg-sky-50 border shadow-lg rounded-lg min-w-[260px] z-50">
              {[
                ["Discrete Mathematics", "https://www.youtube.com/watch?v=h4sd7wRcyR0"],
                ["Linear Algebra", "https://www.youtube.com/watch?v=mPEQEU2FVoI"],
                ["Calculus", "https://www.youtube.com/watch?v=bBH-96y8an0"],
                ["Probability & Statistics", "https://www.youtube.com/watch?v=DK8BV30N_c4"],
              ].map(([t, l], i) => (
                <a key={i} href={l} target="_blank"
                   className="block px-4 py-2 hover:bg-black hover:text-white">
                  {t}
                </a>
              ))}
            </div>
          </div>

          {/* ================= DIGITAL LOGIC ================= */}
          <div className="relative group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/images/dig.jpg"
              alt="Digital Logic"
              className="w-[300px] h-[300px] rounded-[40px] border-2 border-black shadow-xl"
            />
            <div className="absolute top-0 right-full mr-3 hidden group-hover:block bg-sky-50 border shadow-lg rounded-lg min-w-[260px] z-50">
              {[
                "Boolean Algebra",
                "Combinational & Sequential Circuit",
                "Minimisation",
                "Number Representation",
                "Computer Arithmetic",
              ].map((t, i) => (
                <a key={i}
                   href="https://www.youtube.com/watch?v=lH0sYax5Yg0"
                   target="_blank"
                   className="block px-4 py-2 hover:bg-black hover:text-white">
                  {t}
                </a>
              ))}
            </div>
          </div>

          {/* ================= COA ================= */}
          <div className="relative group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/images/coa.webp"
              alt="Computer Organisation"
              className="w-[300px] h-[300px] rounded-[40px] border-2 border-black shadow-xl"
            />
            <div className="absolute top-0 left-full ml-3 hidden group-hover:block bg-sky-50 border shadow-lg rounded-lg min-w-[300px] z-50">
              {[
                "Machine Instruction & Addressing Modes",
                "ALU",
                "Datapath & Control Unit",
                "Instruction Pipelining",
                "Pipeline Hazards",
                "Memory Hierarchy",
              ].map((t, i) => (
                <a key={i}
                   href="https://www.youtube.com/watch?v=nezosHntjPg"
                   target="_blank"
                   className="block px-4 py-2 hover:bg-black hover:text-white">
                  {t}
                </a>
              ))}
            </div>
          </div>

          {/* ================= PROGRAMMING & DS ================= */}
          <div className="relative group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/images/ds.jpeg"
              alt="Programming and Data Structure"
              className="w-[300px] h-[300px] rounded-[40px] border-2 border-black shadow-xl"
            />
            <div className="absolute top-0 right-full mr-3 hidden group-hover:block bg-sky-50 border shadow-lg rounded-lg min-w-[300px] z-50">
              {[
                "Programming in C",
                "Data Structure",
                "Control Structures",
                "Functions",
                "Arrays",
                "Pointers",
                "Structures",
                "Linked List",
                "Queue",
              ].map((t, i) => (
                <a key={i}
                   href="https://www.youtube.com/watch?v=YjAKLeMN1Qk"
                   target="_blank"
                   className="block px-4 py-2 hover:bg-black hover:text-white">
                  {t}
                </a>
              ))}
            </div>
          </div>

          {/* ================= TOC ================= */}
          <div className="relative group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/images/toc.webp"
              alt="Theory of Computation"
              className="w-[300px] h-[300px] rounded-[40px] border-2 border-black shadow-xl"
            />
            <div className="absolute top-0 left-full ml-3 hidden group-hover:block bg-sky-50 border shadow-lg rounded-lg min-w-[260px] z-50">
              <a
                href="https://www.youtube.com/watch?v=gK_V_lzNQg8"
                target="_blank"
                className="block px-4 py-2 hover:bg-black hover:text-white"
              >
                Theory of Computation
              </a>
            </div>
          </div>

          {/* ================= OPERATING SYSTEM ================= */}
          <div className="relative group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/images/os.webp"
              alt="Operating System"
              className="w-[300px] h-[300px] rounded-[40px] border-2 border-black shadow-xl"
            />
            <div className="absolute top-0 right-full mr-3 hidden group-hover:block bg-sky-50 border shadow-lg rounded-lg min-w-[260px] z-50">
              <a
                href="https://www.youtube.com/watch?v=86kN-pdxsl0"
                target="_blank"
                className="block px-4 py-2 hover:bg-black hover:text-white"
              >
                Operating System
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GateCard;
