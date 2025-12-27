import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const NeetCard = ({ user }) => {
  return (
    <div className="w-full overflow-x-hidden bg-[#150f0c] text-white">
      {/* ================= NAVBAR ================= */}
      <Navbar user={user} />

      {/* ================= MAIN SECTION ================= */}
      <section
        className="py-16 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bgim.jpg')" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 place-items-center">

          {/* ================= BIOLOGY ================= */}
          <div className="relative group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/images/biology.webp"
              alt="Biology"
              className="w-[300px] h-[300px] rounded-[40px] border-2 border-black shadow-xl"
            />
            <div className="absolute top-0 left-full ml-3 hidden group-hover:block bg-sky-50 text-black border shadow-lg rounded-lg min-w-[340px] z-50">
              {[
                ["Cell Structure & Function", "https://www.youtube.com/watch?v=Fzg8jEv4n10"],
                ["Plant Physiology", "https://www.youtube.com/watch?v=Zql3HiQpOG8"],
                ["Respiratory System", "https://www.youtube.com/watch?v=801CIWiUSJk"],
                ["Body Fluids & Circulation", "https://www.youtube.com/watch?v=YzMpowByJD0"],
                ["Excretory Products", "https://www.youtube.com/watch?v=oockTa1WhsY"],
                ["Locomotion & Movement", "https://www.youtube.com/watch?v=Q5jluBG-yoM"],
                ["Neural Control", "https://www.youtube.com/watch?v=WMWG1Zzu79c"],
                ["Chemical Coordination", "https://www.youtube.com/watch?v=lnsN-W6OVdo"],
              ].map(([t, l], i) => (
                <a
                  key={i}
                  href={l}
                  target="_blank"
                  className="block px-4 py-2 hover:bg-black hover:text-white"
                >
                  {t}
                </a>
              ))}
            </div>
          </div>

          {/* ================= PHYSICS ================= */}
          <div className="relative group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/images/physics.jpg"
              alt="Physics"
              className="w-[300px] h-[300px] rounded-[40px] border-2 border-black shadow-xl"
            />
            <div className="absolute top-0 right-full mr-3 hidden group-hover:block bg-sky-50 text-black border shadow-lg rounded-lg min-w-[300px] z-50">
              {[
                ["Rotational Motion", "https://www.youtube.com/watch?v=UjFSsnu6Zns"],
                ["Thermodynamics", "https://www.youtube.com/watch?v=2u1A9gskJ2I"],
                ["Oscillation & Waves", "https://www.youtube.com/watch?v=urEsdx9xfKI"],
                ["Electrostatics", "https://www.youtube.com/watch?v=StwUNDxdw2c"],
                ["Optics", "https://www.youtube.com/watch?v=5M53eu3UI3U"],
                ["Magnetic Current", "https://www.youtube.com/watch?v=I4kB3onwjpw"],
                ["Current Electricity", "https://www.youtube.com/watch?v=JY24andAvME"],
                ["Modern Physics", "https://www.youtube.com/watch?v=V76QPpoWVwA"],
              ].map(([t, l], i) => (
                <a
                  key={i}
                  href={l}
                  target="_blank"
                  className="block px-4 py-2 hover:bg-black hover:text-white"
                >
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
            <div className="absolute top-0 left-full ml-3 hidden group-hover:block bg-sky-50 text-black border shadow-lg rounded-lg min-w-[300px] z-50">
              {[
                ["Mole Concept", "https://www.youtube.com/watch?v=pi0bAxOGHIo"],
                ["Redox Reaction", "https://www.youtube.com/watch?v=d7DKkFHcdZE"],
                ["Electrochemistry", "https://www.youtube.com/watch?v=EHy52QPMdsk"],
                ["Chemical Kinetics", "https://www.youtube.com/watch?v=T0LFfBuifjk"],
                ["Stereochemistry", "https://www.youtube.com/watch?v=ajG-4UVkdeE"],
                ["Organic Chemistry", "https://www.youtube.com/watch?v=kwG6zR-Gvso"],
                ["Atomic Structure", "https://www.youtube.com/watch?v=sziNY_YN730"],
              ].map(([t, l], i) => (
                <a
                  key={i}
                  href={l}
                  target="_blank"
                  className="block px-4 py-2 hover:bg-black hover:text-white"
                >
                  {t}
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
};

export default NeetCard;
