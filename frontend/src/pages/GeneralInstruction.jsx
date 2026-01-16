import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const GeneralInstruction = () => {
  const { examSlug, testId } = useParams();
  const navigate = useNavigate();
  const [test, setTest] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/tests/instructions/${testId}`)
      .then((res) => setTest(res.data.data))
      .catch((err) => console.error(err));
  }, [testId]);

  if (!test) {
    return (
      <div className="pt-[88px] text-center text-lg">
        Loading instructions...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-[88px] px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-2 text-gray-800">
          {test.title}
        </h1>
        <p className="text-gray-500 mb-6">
          Please read the instructions carefully before starting the test.
        </p>

        {/* Meta Information */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg border">
            <p className="text-sm text-gray-500">Duration</p>
            <p className="text-xl font-semibold">
              {test.duration} minutes
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border">
            <p className="text-sm text-gray-500">Total Questions</p>
            <p className="text-xl font-semibold">
              {test.totalQuestions}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border">
            <p className="text-sm text-gray-500">Negative Marking</p>
            <p className="text-xl font-semibold">
              {test.negativeMarking}
            </p>
          </div>
        </div>

        {/* Hard-coded General Instructions */}
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
          <h2 className="font-semibold text-lg mb-3 text-blue-800">
            General Instructions
          </h2>

          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>The test duration is fixed and cannot be paused.</li>
            <li>The timer will start immediately after you begin the test.</li>
            <li>Do not refresh or close the browser window during the test.</li>
            <li>Each question has only one correct answer.</li>
            <li>Negative marking will be applied for incorrect answers.</li>
            <li>The test will auto-submit when the time is over.</li>
          </ul>
        </div>

        {/* Start Button */}
        <button
          onClick={() => navigate(`/tests/${examSlug}/mock/${testId}`)}
          className="w-full bg-blue-600 text-white py-3 rounded-lg
                     text-lg font-semibold hover:bg-blue-700 transition"
        >
          Start Test
        </button>
      </div>
    </div>
  );
};

export default GeneralInstruction;
