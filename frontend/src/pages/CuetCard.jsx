import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CuetCard = ({ user }) => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar user={user} />

      {/* ================= CONTENT ================= */}
      <section
        className="py-14 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bgim.jpg')" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 place-items-center">

          {/* ================= MATHEMATICS ================= */}
          <div className="relative group">
            <img
              src="/images/math.jpg"
              alt="Mathematics"
              className="w-[300px] h-[300px] rounded-[40px] border-2 border-black shadow-xl"
            />
            <div className="absolute top-0 left-full ml-2 hidden group-hover:block bg-sky-50 border shadow-lg rounded-md min-w-[220px]">
              <a
                href="https://www.youtube.com/watch?v=RND0eKl1k-U"
                target="_blank"
                className="block px-4 py-2 hover:bg-black hover:text-white"
              >
                One Shot Complete Mathematics
              </a>
            </div>
          </div>

          {/* ================= REASONING ================= */}
          <div className="relative group">
            <img
              src="/images/reas.png"
              alt="Reasoning"
              className="w-[300px] h-[300px] rounded-[40px] border-2 border-black shadow-xl"
            />
            <div className="absolute top-0 right-full mr-2 hidden group-hover:block bg-sky-50 border shadow-lg rounded-md min-w-[220px]">
              {[
                "Verbal Reasoning",
                "Non-Verbal Reasoning",
                "Critical Thinking",
              ].map((topic, i) => (
                <a
                  key={i}
                  href="https://www.youtube.com/watch?v=oGgEs-yfbLw"
                  target="_blank"
                  className="block px-4 py-2 hover:bg-black hover:text-white"
                >
                  {topic}
                </a>
              ))}
            </div>
          </div>

          {/* ================= ENGLISH ================= */}
          <div className="relative group">
            <img
              src="/images/eng.webp"
              alt="English"
              className="w-[300px] h-[300px] rounded-[40px] border-2 border-black shadow-xl"
            />
            <div className="absolute top-0 left-full ml-2 hidden group-hover:block bg-sky-50 border shadow-lg rounded-md min-w-[240px]">
              {[
                "Tenses",
                "Active & Passive Voice",
                "Direct & Indirect Speech",
                "Synonym & Antonym",
                "Comprehension",
                "Error Correction",
                "Vocabulary",
              ].map((topic, i) => (
                <a
                  key={i}
                  href="#"
                  className="block px-4 py-2 hover:bg-black hover:text-white"
                >
                  {topic}
                </a>
              ))}
            </div>
          </div>

          {/* ================= COMPUTER ================= */}
          <div className="relative group">
            <img
              src="/images/comp.jpg"
              alt="Computer"
              className="w-[300px] h-[300px] rounded-[40px] border-2 border-black shadow-xl"
            />
            <div className="absolute top-0 right-full mr-2 hidden group-hover:block bg-sky-50 border shadow-lg rounded-md min-w-[220px]">
              {[
                "Operating System",
                "Boolean Algebra",
                "Logic Gate",
                "K-Map",
                "Number Conversion",
              ].map((topic, i) => (
                <a
                  key={i}
                  href="#"
                  className="block px-4 py-2 hover:bg-black hover:text-white"
                >
                  {topic}
                </a>
              ))}
            </div>
          </div>

          {/* ================= CHEMISTRY ================= */}
          <div className="relative group">
            <img
              src="/images/chemistry.jpg"
              alt="Chemistry"
              className="w-[300px] h-[300px] rounded-[40px] border-2 border-black shadow-xl"
            />
            <div className="absolute top-0 left-full ml-2 hidden group-hover:block bg-sky-50 border shadow-lg rounded-md min-w-[240px]">
              {[
                "Mole Concept",
                "Redox Reaction",
                "Electrochemistry",
                "Chemical Kinetics",
                "Stereochemistry",
                "Organic Chemistry",
                "Atomic Structure",
              ].map((topic, i) => (
                <a
                  key={i}
                  href="#"
                  className="block px-4 py-2 hover:bg-black hover:text-white"
                >
                  {topic}
                </a>
              ))}
            </div>
          </div>

          {/* ================= PHYSICS ================= */}
          <div className="relative group">
            <img
              src="/images/physics.jpg"
              alt="Physics"
              className="w-[300px] h-[300px] rounded-[40px] border-2 border-black shadow-xl"
            />
            <div className="absolute top-0 right-full mr-2 hidden group-hover:block bg-sky-50 border shadow-lg rounded-md min-w-[240px]">
              {[
                "Rotational Motion",
                "Thermodynamics",
                "Oscillations & Waves",
                "Electrostatics",
                "Optics",
                "Magnetic Current",
                "Current Electricity",
                "Modern Physics",
              ].map((topic, i) => (
                <a
                  key={i}
                  href="#"
                  className="block px-4 py-2 hover:bg-black hover:text-white"
                >
                  {topic}
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

export default CuetCard;
