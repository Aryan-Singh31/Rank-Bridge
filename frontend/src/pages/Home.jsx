import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  BookOpen,
  GraduationCap,
  Brain,
  FileText,
  Users,
} from "lucide-react";
import Navbar from "../components/Navbar";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Home = ({ user }) => {
  return (
    <div className="w-full overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
     <Navbar user={user}/>

      {/* ================= HERO ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <img
          src="/images/study.jpg"
          className="w-full h-[380px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Learn. Practice. Succeed.
          </h1>
          <p className="max-w-xl text-lg">
            India’s one-stop platform for competitive exam preparation
          </p>
        </div>
      </motion.div>

      {/* ================= COURSES ================= */}
      <section className="p-10">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Popular Courses
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
        >
          {[
            { title: "NIMCET", img: "/images/nimcet.jpeg" },
            { title: "JEE", img: "/images/jee-main-2025.webp" },
            { title: "NEET", img: "/images/neet.jpg" },
            { title: "GATE", img: "/images/gateimg.jpg" },
            { title: "CUET", img: "/images/cuet.webp" },
            { title: "UPSC", img: "/images/upsc.jpg" },
          ].map((course, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={course.img}
                className="h-48 w-full object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold">{course.title}</h3>
                <p className="text-gray-600 mt-2">
                  Complete preparation with tests, notes & mentorship
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-slate-50 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Rank Bridge?
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 px-10"
        >
          {[
            { icon: BookOpen, title: "Test Series" },
            { icon: Users, title: "Expert Mentors" },
            { icon: FileText, title: "PYQs" },
            { icon: Brain, title: "Smart Notes" },
          ].map((f, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -8 }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <f.icon size={40} className="mx-auto text-blue-600 mb-4" />
              <h3 className="font-bold text-lg">{f.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= QUOTE ================= */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 py-12">
        <motion.img
          whileHover={{ scale: 1.05 }}
          src="/images/nelsonimg.jpg"
          className="w-64 h-64 rounded-full shadow-xl"
        />
        <motion.img
          whileHover={{ scale: 1.05 }}
          src="/images/nelson quote.webp"
          className="w-64 h-64 rounded-xl shadow-xl"
        />
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-gray-300 px-10 py-8 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <img src="/images/finall.png" className="w-40 mb-4" />
          <p>Greater Noida, Uttar Pradesh</p>
        </div>

        <div className="md:w-1/3 text-center">
          <h4 className="font-bold text-white mb-4">STAY CONNECTED</h4>
          <div className="flex justify-center gap-5">
            <img src="/images/instagrame.png" className="w-6" />
            <img src="/images/facebook.png" className="w-6" />
            <img src="/images/youtube.png" className="w-6" />
            <img src="/images/twitter.png" className="w-6" />
          </div>
        </div>

        <div className="md:w-1/3 text-sm">
          © 2022 Rank Bridge <br />
          All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default Home;
