import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { BookOpen, Brain, FileText, Users } from "lucide-react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";


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
      { title: "NIMCET", img: "/images/nimcet.jpeg", link: "/nimcetcard" },
      { title: "JEE", img: "/images/jee-main-2025.webp", link: "/jeecard" },
      { title: "NEET", img: "/images/neet.jpg", link: "/neetcard" },
      { title: "GATE", img: "/images/gateimg.jpg", link: "/gatecard" },
      { title: "CUET", img: "/images/cuet.webp", link: "/cuetcard" },
      { title: "UPSC", img: "/images/upsc.jpg", link: "/upsccard" },
    ].map((course, i) => (
      <Link key={i} to={course.link}>
        <motion.div
          variants={item}
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer"
        >
          <img
            src={course.img}
            className="h-48 w-full object-cover"
            alt={course.title}
          />
          <div className="p-5 text-center">
            <h3 className="text-xl font-bold">{course.title}</h3>
            <p className="text-gray-600 mt-2">
              Complete preparation with tests, notes & mentorship
            </p>
          </div>
        </motion.div>
      </Link>
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
     

       <Footer />
    </div>
  );
};

export default Home;
