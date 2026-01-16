import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const examBanners = {
  nimcet: "/images/nimcet.jpeg",
  jee: "/images/jee-main-2025.webp",
  neet: "/images/neet.jpg",
  gate: "/images/gateimg.jpg",
  cuet: "/images/cuet.webp",
  upsc: "/images/upsc.jpg",
};

const ExamTestPage = () => {
  const { examSlug } = useParams();
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        // 1️⃣ slug se exam lao
        const examRes = await axios.get(
          `/api/exams/slug/${examSlug}`
        );

        const examId = examRes.data.exam._id;

        // 2️⃣ examId se tests lao
        const testRes = await axios.get(
          `/api/tests/exam/${examId}`
        );

        setTests(testRes.data.tests || []);
      } catch (err) {
        console.error("FETCH TESTS ERROR:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTests();
  }, [examSlug]);

  return (
    <div className="min-h-screen bg-gray-100 pt-[88px]">
  
  {/* PAGE WRAPPER */}
  <div className="w-full flex justify-center">
    <div className="w-full max-w-7xl">

      {/* HERO */}
      <div
        className="h-56 flex items-center justify-center text-white text-4xl font-bold uppercase text-center"
        style={{
          backgroundImage: `url(${examBanners[examSlug] || "/images/default-exam.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {examSlug} Mock Tests
      </div>

      {/* CONTENT */}
      <div className="py-16 px-6">
        {loading ? (
          <div className="text-center text-xl">Loading mock tests...</div>
        ) : tests.length === 0 ? (
          <div className="text-center text-xl text-gray-600">
            No mock tests available right now.
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl w-full">
              {tests.map((test, index) => (
                <Link
                  key={test._id}
                  to={`/tests/${examSlug}/instructions/${test._id}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="h-36 flex items-center justify-center rounded-xl
                               bg-gradient-to-r from-indigo-700 to-slate-800
                               text-white text-3xl font-bold shadow-lg cursor-pointer"
                  >
                    {test.title || `Mock Test ${index + 1}`}
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  </div>
</div>
  );
};

export default ExamTestPage;
