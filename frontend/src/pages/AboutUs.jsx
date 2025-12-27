import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Target, Star, Rocket } from "lucide-react";

const AboutUs = ({ user }) => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar user={user} />

      {/* ================= INTRO ================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 py-10"
      >
        <p className="text-xl md:text-2xl font-semibold italic text-gray-800 text-center leading-relaxed">
          “Welcome to <span className="text-purple-700 font-bold">Rank Bridge</span> – 
          your ultimate companion for competitive exam success! Whether you're preparing for 
          NIMCET, JEE, NEET, CUET, GATE, or other major entrance exams, Rank Bridge offers 
          high-quality study materials, PYQs, and guided preparation to bridge the gap 
          between your aspirations and achievements.”
        </p>
      </motion.section>

      {/* ================= OUR FOCUS ================= */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Target className="text-purple-700" /> Our Focus
          </h2>

          <ul className="space-y-4 text-lg bg-white p-6 rounded-xl shadow-md">
            <li>📘 Comprehensive resources for major competitive exams.</li>
            <li>🌍 Accessible, reliable, and updated preparation material.</li>
            <li>🧭 Guided preparation with curated syllabi & topics.</li>
            <li>🚀 Confidence building through practice & expert insights.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-6 flex items-center gap-2">
            <Star className="text-purple-700" /> Key Features
          </h2>

          <ul className="space-y-3 text-lg bg-white p-6 rounded-xl shadow-md">
            <li>📚 Detailed notes & topic explanations</li>
            <li>📝 Previous Years’ Question Papers (PYQs)</li>
            <li>📌 Updated syllabus coverage</li>
            <li>⚡ Important topics & exam insights</li>
            <li>🧑‍💻 User-friendly navigation</li>
            <li>🔔 Regular exam updates</li>
            <li>🎯 Coverage of diverse exams</li>
          </ul>
        </div>
      </section>

      {/* ================= UPCOMING ================= */}
      <motion.section
        whileHover={{ scale: 1.01 }}
        className="max-w-6xl mx-auto px-6 py-12"
      >
        <h2 className="text-4xl font-bold text-center mb-6 flex justify-center items-center gap-2">
          <Rocket className="text-purple-700" /> Upcoming Features
        </h2>

        <ul className="text-lg space-y-4 bg-purple-50 p-6 rounded-xl shadow-md">
          <li>🧪 Interactive mock tests</li>
          <li>🎥 Live tutoring & doubt clearing</li>
          <li>📱 Mobile app access</li>
          <li>🤖 AI-powered performance analysis</li>
        </ul>
      </motion.section>

      {/* ================= TEAM ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-10">
          Meet Our Developer Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            {
              name: "Aryan Singh",
              img: "/images/aryan.jpeg",
              text:
                "Front-end expert with full-stack skills, crafting responsive and dynamic UI."
            },
            {
              name: "Shweta Singh",
              img: "/images/shweta.jpeg",
              text:
                "Full-stack developer & UI/UX designer delivering seamless experiences."
            },
            {
              name: "Krishna Thakur",
              img: "/images/krishna1.jpeg",
              text:
                "MongoDB & backend expert ensuring scalability and reliability."
            },
            {
              name: "Krishna",
              img: "/images/krishna.jpeg",
              text:
                "Creative front-end developer with a focus on usability and design."
            }
          ].map((dev, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="border rounded-xl p-5 shadow-md text-center hover:bg-black hover:text-white transition"
            >
              <img
                src={dev.img}
                className="w-20 h-20 mx-auto rounded-full mb-3"
              />
              <h4 className="font-bold text-lg mb-2">{dev.name}</h4>
              <p className="text-sm">{dev.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TEAM CREDIT ================= */}
      <section className="bg-slate-100 py-10 text-center px-6">
        <h2 className="text-2xl font-bold mb-4">Team Credentials</h2>
        <p className="max-w-4xl mx-auto text-lg">
          All developers are MCA postgraduates from <strong>MNNIT Allahabad</strong>, 
          bringing expertise in front-end, back-end, database systems, and UI/UX design 
          to build a robust and student-centric platform.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
