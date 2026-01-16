import { useState } from "react";
import axios from "axios";

const AddExam = () => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");

  const token = localStorage.getItem("token");

  // 🔹 auto-generate slug from name
  const generateSlug = (value) => {
    return value
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  };

  const handleSubmit = async () => {
    if (!name || !slug) {
      alert("Please fill all fields ❗");
      return;
    }

    try {
      await axios.post(
        "/api/exams",
        { name, slug },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Exam added successfully ✅");
      setName("");
      setSlug("");
    } catch (err) {
      if (err.response?.status === 409) {
        alert("Exam already exists ⚠️");
      } else if (err.response?.status === 400) {
        alert("Invalid exam data ❗");
      } else {
        alert("Failed to add exam ❌");
      }

      console.error("ADD EXAM ERROR:", err.response?.data || err.message);
    }
  };

  return (
    <div className="max-w-md bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add Exam</h2>

      {/* Exam Name */}
      <input
        type="text"
        placeholder="Exam Name (e.g. NIMCET)"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setSlug(generateSlug(e.target.value));
        }}
        className="w-full mb-3 p-2 border rounded"
      />

      {/* Slug */}
      <input
        type="text"
        placeholder="Slug (auto-generated)"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Add Exam
      </button>
    </div>
  );
};

export default AddExam;
