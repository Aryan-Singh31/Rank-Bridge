import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const tests = [
  { title: "NIMCET", img: "/images/nimcet.jpeg", link: "/test-series/nimcet" },
  { title: "JEE", img: "/images/jee-main-2025.webp", link: "/test-series/jee" },
  { title: "NEET", img: "/images/neet.jpg", link: "/test-series/neet" },
  { title: "GATE", img: "/images/gateimg.jpg", link: "/test-series/gate" },
  { title: "CUET", img: "/images/cuet.webp", link: "/test-series/cuet" },
  { title: "UPSC", img: "/images/upsc.jpg", link: "/test-series/upsc" },
];

const TestHome = () => {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        Test Series
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {tests.map((t, i) => (
          <Link key={i} to={t.link}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={t.img}
                alt={t.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold">{t.title}</h3>
                <p className="text-gray-600 mt-2">
                  Full-length mock tests & analysis
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TestHome;
