import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const TestPlayer = () => {
  const { examSlug, testId } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // ===== CORE STATES =====
  const [attemptId, setAttemptId] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [duration, setDuration] = useState(0);

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [answersMap, setAnswersMap] = useState({});
  const [statusMap, setStatusMap] = useState({}); // not-visited | visited | answered | review

  const [timeLeft, setTimeLeft] = useState(0);
  const [loading, setLoading] = useState(true);

  /* =========================================
     STEP 1 — START / RESUME TEST
  ========================================= */
 useEffect(() => {
  console.log("🔥 startTest useEffect RUN");

  const startTest = async () => {
    try {
      const res = await axios.post(
        `/api/attempt/start/${testId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setAttemptId(res.data.attemptId);
      setStartTime(res.data.startTime);
    } catch (err) {
      console.error("START TEST ERROR:", err);
    }
  };

  startTest();
}, [testId, token]);


  /* =========================================
     STEP 2 — FETCH QUESTIONS
  ========================================= */
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get(`/api/tests/questions/${testId}`);
        setQuestions(res.data.questions);
      } catch (err) {
        console.error("FETCH QUESTIONS ERROR:", err);
      }
    };

    fetchQuestions();
  }, [testId]);

  /* =========================================
     STEP 3 — FETCH TEST INFO (DURATION)
  ========================================= */
  useEffect(() => {
    const fetchTestInfo = async () => {
      try {
        const res = await axios.get(`/api/tests/instructions/${testId}`);
        setDuration(res.data.data.duration);
        setStartTime(new Date().toISOString());

      } catch (err) {
        console.error("FETCH TEST INFO ERROR:", err);
      }
    };

    fetchTestInfo();
  }, [testId]);

  /* =========================================
     STEP 4 — TIMER (SERVER SYNCED)
  ========================================= */
  useEffect(() => {
    if (!startTime || !duration) return;

    const start = new Date(startTime).getTime();
    const totalSeconds = duration * 60;

    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - start) / 1000);
      const remaining = totalSeconds - elapsed;

      if (remaining <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
        handleSubmit(true);
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    setLoading(false);
    return () => clearInterval(interval);
  }, [startTime, duration]);

  /* =========================================
     STEP 5 — MARK VISITED QUESTION
  ========================================= */
  useEffect(() => {
    if (!questions[currentIndex]) return;

    const qid = questions[currentIndex]._id;

    setStatusMap((prev) => ({
      ...prev,
      [qid]: prev[qid] || "visited",
    }));
  }, [currentIndex, questions]);

  /* =========================================
     STEP 6 — RESUME ATTEMPT AFTER REFRESH
  ========================================= */
  // useEffect(() => {
  //   if (!attemptId) return;

  //   const loadAttempt = async () => {
  //     try {
  //       const res = await axios.get(`/api/attempts/${attemptId}`, {
  //         headers: { Authorization: `Bearer ${token}` },
  //       });

  //       const amap = {};
  //       const smap = {};

  //       res.data.answers.forEach((a) => {
  //         if (a.selectedOption !== null) {
  //           amap[a.questionId] = a.selectedOption;
  //         }
  //         smap[a.questionId] = a.status;
  //       });

  //       setAnswersMap(amap);
  //       setStatusMap(smap);
  //     } catch (err) {
  //       console.error("RESUME ERROR:", err);
  //     }
  //   };

  //   loadAttempt();
  // }, [attemptId, token]);

  /* =========================================
     SAVE ANSWER (AUTO SAVE)
  ========================================= */
  const saveAnswer = async (questionId, optionIndex) => {
  setAnswersMap((prev) => ({
    ...prev,
    [questionId]: optionIndex,
  }));

  setStatusMap((prev) => ({
    ...prev,
    [questionId]: "answered",
  }));

  if (!attemptId) return; // 🔥 IMPORTANT

  try {
    await axios.post(
      `/api/attempt/answer/${attemptId}`,
      {
        questionId,
        selectedOption: optionIndex,
        status: "answered",
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  } catch (err) {
    console.error("SAVE ANSWER ERROR:", err);
  }
};


  /* =========================================
     MARK FOR REVIEW
  ========================================= */
 const markForReview = async (questionId) => {
  setStatusMap((prev) => ({
    ...prev,
    [questionId]: "review",
  }));

  if (!attemptId) return; // 🔥 IMPORTANT

  try {
    await axios.post(
      `/api/attempt/answer/${attemptId}`,
      {
        questionId,
        selectedOption: answersMap[questionId] ?? null,
        status: "review",
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  } catch (err) {
    console.error("MARK REVIEW ERROR:", err);
  }
};


  /* =========================================
     SUBMIT TEST
  ========================================= */
 const handleSubmit = async (auto = false) => {
  if (!auto && !window.confirm("Are you sure you want to submit the test?"))
    return;

  // 🔹 UI-only mode (no attempt backend yet)
  if (!attemptId) {
    navigate("/result/demo", {
      state: {
        questions,
        answersMap,
      },
    });
    return;
  }

  // 🔹 Future: backend-based submit
  try {
    await axios.post(
      `/api/attempt/submit/${attemptId}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    navigate(`/result/${attemptId}`);
  } catch (err) {
    console.error("SUBMIT ERROR:", err);
  }
};



  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  if (loading) {
    return <div className="p-10 text-center text-xl">Loading Test...</div>;
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {/* ===== HEADER ===== */}
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold uppercase">
          {examSlug} Mock Test
        </h2>
        <div className="text-lg font-semibold text-red-600">
          Time Left: {formatTime(timeLeft)}
        </div>
      </div>

      {/* ===== QUESTION ===== */}
      {currentQuestion && (
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">
            Q{currentIndex + 1}. {currentQuestion.questionText}
          </h3>

          {currentQuestion.options.map((opt, idx) => (
            <label
              key={idx}
              className={`block p-3 border rounded cursor-pointer mb-2 ${
                answersMap[currentQuestion._id] === idx
                  ? "bg-indigo-100 border-indigo-500"
                  : ""
              }`}
            >
              <input
                type="radio"
                name={`q-${currentQuestion._id}`}
                className="mr-2"
                checked={answersMap[currentQuestion._id] === idx}
                onChange={() =>
                  saveAnswer(currentQuestion._id, idx)
                }
              />
              {opt}
            </label>
          ))}

          <button
            onClick={() => markForReview(currentQuestion._id)}
            className="mt-4 px-4 py-2 bg-yellow-400 rounded"
          >
            Mark for Review
          </button>
        </div>
      )}

      {/* ===== QUESTION PALETTE ===== */}
      <div className="grid grid-cols-8 gap-2 mt-6">
        {questions.map((q, idx) => {
          const status = statusMap[q._id] || "not-visited";

          const color =
            status === "answered"
              ? "bg-green-500"
              : status === "review"
              ? "bg-yellow-400"
              : status === "visited"
              ? "bg-blue-400"
              : "bg-gray-300";

          return (
            <button
              key={q._id}
              onClick={() => setCurrentIndex(idx)}
              className={`w-10 h-10 rounded text-white font-bold ${color}`}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      {/* ===== NAVIGATION ===== */}
      <div className="flex justify-between mt-6">
        <button
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex((i) => i - 1)}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Previous
        </button>

        <button
          disabled={currentIndex === questions.length - 1}
          onClick={() => setCurrentIndex((i) => i + 1)}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Next
        </button>
      </div>

      {/* ===== SUBMIT ===== */}
      <div className="mt-10 text-center">
        <button
          onClick={() => handleSubmit(false)}
          className="px-8 py-3 bg-red-600 text-white rounded text-lg"
        >
          Submit Test
        </button>
      </div>
    </div>
  );
};

export default TestPlayer;
