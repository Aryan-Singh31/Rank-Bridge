import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// ===== Course Pages =====
import NimcetCard from "./pages/NimcetCard";
import Jeecard from "./pages/Jeecard";
import NeetCard from "./pages/NeetCard";
import GateCard from "./pages/GateCard";
import CuetCard from "./pages/CuetCard";
import UpscCard from "./pages/UpscCard";

// ===== Notes Pages =====
import NotesHome from "./pages/NotesHome";
import CuetNotes from "./pages/CuetNotes";
import JeeNotes from "./pages/JeeNotes";
import NeetNotes from "./pages/NeetNotes";
import GateNotes from "./pages/GateNotes";
import UpscNotes from "./pages/UpscNotes";
import NimcetNotes from "./pages/NimcetNotes";

// ===== PYQ Pages =====
import PYQsHome from "./pages/PYQsHome";
import CuetPYQs from "./pages/CuetPYQs";
import NimcetPYQs from "./pages/NimcetPYQs";
import JeePYQs from "./pages/JeePYQs";
import NeetPYQs from "./pages/NeetPYQs";
import GatePYQs from "./pages/GatePYQs";
import UpscPYQs from "./pages/UpscPYQs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* ===== Courses ===== */}
      <Route path="/nimcetcard" element={<NimcetCard />} />
      <Route path="/jeecard" element={<Jeecard />} />
      <Route path="/neetcard" element={<NeetCard />} />
      <Route path="/gatecard" element={<GateCard />} />
      <Route path="/cuetcard" element={<CuetCard />} />
      <Route path="/upsccard" element={<UpscCard />} />

      {/* ===== Notes ===== */}
      <Route path="/notes" element={<NotesHome />} />
      <Route path="/notes/cuet" element={<CuetNotes />} />
      <Route path="/notes/jee" element={<JeeNotes />} />
      <Route path="/notes/neet" element={<NeetNotes />} />
      <Route path="/notes/gate" element={<GateNotes />} />
      <Route path="/notes/nimcet" element={<NimcetNotes />} />
      <Route path="/notes/upsc" element={<UpscNotes />} />

      {/* ===== PYQs ===== */}
      <Route path="/pyqs" element={<PYQsHome />} />
      <Route path="/pyqs/cuet" element={<CuetPYQs />} />
      <Route path="/pyqs/nimcet" element={<NimcetPYQs />} />
      <Route path="/pyqs/jee" element={<JeePYQs />} />
      <Route path="/pyqs/neet" element={<NeetPYQs />} />
      <Route path="/pyqs/gate" element={<GatePYQs />} />
      <Route path="/pyqs/upsc" element={<UpscPYQs />} />
    </Routes>
  );
}

export default App;
