import { useEffect, useState } from "react";
import axios from "axios";

const AddTest = () => {
  const [title, setTitle] = useState("");
  const [examId, setExamId] = useState("");
  const [duration, setDuration] = useState("");
  const [totalQuestions, setTotalQuestions] = useState("");
  const [marksPerQuestion, setMarksPerQuestion] = useState("");
  const [exams, setExams] = useState([]);

  const token = localStorage.getItem("token");

  // Fetch exams
  useEffect(() => {
    axios
      .get("/api/exams")
      .then((res) => setExams(res.data.exams || []))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = async () => {
    if (
      !title ||
      !examId ||
      !duration ||
      !totalQuestions ||
      !marksPerQuestion
    ) {
      alert("Please fill all required fields");
      return;
    }

    try {
      await axios.post(
        "/api/tests",
        {
          title,
          duration: Number(duration),
          totalQuestions: Number(totalQuestions),
          marksPerQuestion: Number(marksPerQuestion),
          negativeMarking: 1, // default
          exam: examId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Test added successfully");

      // Reset form
      setTitle("");
      setDuration("");
      setTotalQuestions("");
      setMarksPerQuestion("");
      setExamId("");
    } catch (err) {
      alert("Failed to add test");
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="max-w-md bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add Test</h2>

      <input
        type="text"
        placeholder="Test Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />

      <select
        value={examId}
        onChange={(e) => setExamId(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      >
        <option value="">Select Exam</option>
        {exams.map((e) => (
          <option key={e._id} value={e._id}>
            {e.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Duration (minutes)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />

      <input
        type="number"
        placeholder="Total Questions"
        value={totalQuestions}
        onChange={(e) => setTotalQuestions(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />

      <input
        type="number"
        placeholder="Marks per Question"
        value={marksPerQuestion}
        onChange={(e) => setMarksPerQuestion(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Add Test
      </button>
    </div>
  );
};

export default AddTest;
