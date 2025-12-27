import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Jeecard = ({ user }) => {
  return (
    <div className="w-full overflow-x-hidden bg-[#150f0c] text-white">
      {/* ================= NAVBAR ================= */}
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
            <div className="absolute top-0 left-full ml-3 hidden group-hover:block bg-sky-50 text-black border shadow-lg rounded-lg min-w-[320px] z-50">
              {[
                ["Algebra", "https://www.youtube.com/watch?v=zWfdM4bK1ss"],
                ["Calculus", "https://www.youtube.com/watch?v=8qKNiafafkc"],
                ["Probability", "https://www.youtube.com/watch?v=jFPsFvB3NGY"],
                ["Trigonometry", "https://www.youtube.com/watch?v=effWeFEizQw"],
                ["Set Theory", "https://www.youtube.com/watch?v=Ql8wf15KD0Y"],
                ["Relation & Function", "https://www.youtube.com/watch?v=l-wIvS6mDl4"],
                ["Quadratic", "https://www.youtube.com/watch?v=hWX351vgRRc"],
                ["Integration", "https://www.youtube.com/watch?v=PYkBS-R95rQ"],
                ["Differentiation", "https://www.youtube.com/watch?v=i1Dpns59p24"],
                ["Statics", "https://www.youtube.com/watch?v=QHcbiokBrME"],
                ["Coordinate Geometry", "https://www.youtube.com/watch?v=-DvIPwSlXV4"],
              ].map(([t, l], i) => (
                <a
                  key={i}
                  href={l}
                  target="_blank"
                  rel="noreferrer"
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
                  rel="noreferrer"
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
                  rel="noreferrer"
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

export default Jeecard;
