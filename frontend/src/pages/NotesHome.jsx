import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const notes = [
  { title: "NIMCET", img: "/images/nimcet.jpeg", link: "/notes/nimcet" },
  { title: "JEE", img: "/images/jee-main-2025.webp", link: "/notes/jee" },
  { title: "NEET", img: "/images/neet.jpg", link: "/notes/neet" },
  { title: "GATE", img: "/images/gateimg.jpg", link: "/notes/gate" },
  { title: "CUET", img: "/images/cuet.webp", link: "/notes/cuet" },
  { title: "UPSC", img: "/images/upsc.jpg", link: "/notes/upsc" },
];


const NotesHome = ({ user }) => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar user={user} />

      <section className="py-14 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Smart Notes
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {notes.map((n, i) => (
            <Link key={i} to={n.link}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer"
              >
                <img
                  src={n.img}
                  alt={n.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-5 text-center">
                  <h3 className="text-xl font-bold">{n.title}</h3>
                  <p className="text-gray-600 mt-2">
                    Subject-wise smart notes & formulas
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotesHome;
