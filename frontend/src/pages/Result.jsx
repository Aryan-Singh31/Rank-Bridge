import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Result = () => {
  const { attemptId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  const [result, setResult] = useState(null);

  /* =========================================
     DEMO MODE (UI-only, no backend)
  ========================================= */
  useEffect(() => {
    if (attemptId === "demo") {
      const { questions, answersMap } = location.state || {};

      if (!questions || !answersMap) return;

      let correct = 0;
      let wrong = 0;
      let skipped = 0;

      questions.forEach((q) => {
        const selected = answersMap[q._id];

        if (selected === undefined) {
          skipped++;
        } else if (selected === q.correctOption) {
          correct++;
        } else {
          wrong++;
        }
      });

      const score = correct * 4 - wrong * 1;

      setResult({ correct, wrong, skipped, score });
    }
  }, [attemptId, location.state]);

  /* =========================================
     REAL MODE (future backend)
  ========================================= */
  useEffect(() => {
    if (attemptId === "demo") return;

    axios
      .get(`/api/attempts/result/${attemptId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setResult(res.data))
      .catch((err) => console.error(err));
  }, [attemptId, token]);

  if (!result) {
    return <div className="p-10 text-center text-xl">Loading Result...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8">
          Test Result
        </h2>

        <div className="space-y-4 text-lg">
          <p>✅ Correct: <b>{result.correct}</b></p>
          <p>❌ Wrong: <b>{result.wrong}</b></p>
          <p>⚪ Skipped: <b>{result.skipped}</b></p>
          <p className="text-xl font-bold mt-4">
            🎯 Score: {result.score}
          </p>
        </div>

        <div className="mt-8 flex justify-between">
          <button
            onClick={() => navigate("/test-series")}
            className="px-5 py-2 bg-gray-300 rounded"
          >
            Back to Tests
          </button>

          <button
            onClick={() => navigate("/home")}
            className="px-5 py-2 bg-indigo-600 text-white rounded"
          >
            Home
          </button>
        </div>

        {attemptId === "demo" && (
          <p className="text-center text-sm text-gray-500 mt-4">
            Demo mode result (UI-only)
          </p>
        )}
      </div>
    </div>
  );
};

export default Result;
