import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* ===== SIDEBAR ===== */}
      <div className="w-64 bg-slate-800 text-white p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

        <Link to="/admin" className="block hover:text-yellow-400">
          Dashboard
        </Link>
        <Link to="/admin/exams" className="block hover:text-yellow-400">
          Add Exam
        </Link>
        <Link to="/admin/tests" className="block hover:text-yellow-400">
          Add Test
        </Link>
        <Link to="/admin/questions" className="block hover:text-yellow-400">
          Add Question
        </Link>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="flex-1 p-8 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
