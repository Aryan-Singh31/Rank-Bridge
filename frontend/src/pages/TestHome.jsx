import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

const examImages = {
  nimcet: "/images/nimcet.jpeg",
  jee: "/images/jee-main-2025.webp",
  neet: "/images/neet.jpg",
  gate: "/images/gateimg.jpg",
  cuet: "/images/cuet.webp",
  upsc: "/images/upsc.jpg",
};

const TestHome = () => {
  const [tests, setTests] = useState([]);      // state
  const [loading, setLoading] = useState(true);

  // 🔒 SAFE LOCAL ARRAY (THIS IS THE KEY)
  const safeTests = Array.isArray(tests) ? tests : [];

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const res = await axios.get("/api/exams");
        setTests(res?.data?.exams ?? []);      // never undefined
      } catch (err) {
        console.error("FETCH EXAMS ERROR:", err);
        setTests([]);
      } finally {
        setLoading(false);
      }
    };

    fetchExams();
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        Test Series
      </h2>

      {loading && (
        <div className="text-center text-xl">Loading exams...</div>
      )}

      {!loading && safeTests.length === 0 && (
        <div className="text-center text-xl text-gray-500">
          No exams available
        </div>
      )}

      {!loading && safeTests.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {safeTests.map((t) => (
            <Link key={t._id} to={`/test-series/${t.slug}`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer"
              >
                <img
                  src={examImages[t.slug] || "/images/default-exam.jpg"}
                  alt={t.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-5 text-center">
                  <h3 className="text-xl font-bold">{t.name}</h3>
                  <p className="text-gray-600 mt-2">
                    Full-length mock tests & analysis
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestHome;
