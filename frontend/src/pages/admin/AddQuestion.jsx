import { useEffect, useState } from "react";
import axios from "axios";

const AddQuestion = () => {
  const [tests, setTests] = useState([]);
  const [testId, setTestId] = useState("");
  const [section, setSection] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctOption, setCorrectOption] = useState(0);

  const token = localStorage.getItem("token");

  // 🔹 Fetch all tests (admin)
  useEffect(() => {
    const fetchTests = async () => {
      try {
        const res = await axios.get("/api/tests", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTests(res.data.tests || []);
      } catch (err) {
        console.error("FETCH TESTS ERROR:", err.response?.data || err.message);
      }
    };

    fetchTests();
  }, [token]);

  // 🔹 Submit Question
  const handleSubmit = async () => {
    if (
      !testId ||
      !questionText ||
      options.some((opt) => !opt.trim())
    ) {
      alert("Please fill all required fields");
      return;
    }

    try {
      await axios.post(
        `/api/tests/${testId}/questions`,
        {
          questionText,
          options,
          correctOption,
          section, // optional but supported
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Question added successfully");

      // Reset form
      setQuestionText("");
      setOptions(["", "", "", ""]);
      setCorrectOption(0);
      setSection("");
    } catch (err) {
      alert("Failed to add question");
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="max-w-lg bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add Question</h2>

      {/* Select Test */}
      <select
        value={testId}
        onChange={(e) => setTestId(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      >
        <option value="">Select Test</option>
        {tests.map((t) => (
          <option key={t._id} value={t._id}>
            {t.title}
          </option>
        ))}
      </select>

      {/* Section (Optional) */}
      <input
        type="text"
        placeholder="Section (e.g. Physics, Mathematics)"
        value={section}
        onChange={(e) => setSection(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />

      {/* Question */}
      <textarea
        placeholder="Question text"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />

      {/* Options */}
      {options.map((opt, i) => (
        <input
          key={i}
          type="text"
          placeholder={`Option ${i + 1}`}
          value={opt}
          onChange={(e) => {
            const newOptions = [...options];
            newOptions[i] = e.target.value;
            setOptions(newOptions);
          }}
          className="w-full mb-2 p-2 border rounded"
        />
      ))}

      {/* Correct Option */}
      <select
        value={correctOption}
        onChange={(e) => setCorrectOption(Number(e.target.value))}
        className="w-full mb-4 p-2 border rounded"
      >
        {[0, 1, 2, 3].map((i) => (
          <option key={i} value={i}>
            Correct Option {i + 1}
          </option>
        ))}
      </select>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
      >
        Add Question
      </button>
    </div>
  );
};

export default AddQuestion;
