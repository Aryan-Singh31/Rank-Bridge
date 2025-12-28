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

/* ===== TEST SERIES ===== */
import TestHome from "./pages/TestHome";
import UpscTestPage from "./pages/UpscTestPage";
import NimcetTestPage from "./pages/NimcetTestPage";
 import JeeTestPage from "./pages/JeeTestPage";
 import NeetTestPage from "./pages/NeetTestPage";
import GateTestPage from "./pages/GateTestPage";
import CuetTestPage from "./pages/CuetTestPage";

/* =====GENERAL INSTRUCTIONS FOR TEST SERIES ===== */
import CuetGeneralInstruction from "./pages/CuetGeneralInstruction";
import GateGeneralInstruction from "./pages/GateGeneralInstruction";
import UpscGeneralInstruction from "./pages/UpscGeneralInstruction";
import NeetGeneralInstruction from "./pages/NeetGeneralInstruction";
import NimcetGeneralInstruction from "./pages/NimcetGeneralInstruction";
import JeeGeneralInstruction from "./pages/JeeGeneralInstruction";


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

       {/* ===== TEST SERIES ===== */}
      <Route path="/test-series" element={<TestHome />} />
      <Route path="/test-series/upsc" element={<UpscTestPage />} />
      <Route path="/test-series/nimcet" element={<NimcetTestPage />} />
      <Route path="/test-series/jee" element={<JeeTestPage />} />
      <Route path="/test-series/cuet" element={<CuetTestPage />} />
      <Route path="/test-series/gate" element={<GateTestPage />} />
      <Route path="/test-series/neet" element={<NeetTestPage />} />

         {/* ===== MOCK TEST SERIES ===== */}
      <Route path="/tests/cuet/instructions" element={<CuetGeneralInstruction />}/>
       <Route path="/tests/cuet/mock/:id" element={ <div className="p-10 text-center text-xl"> CUET Mock Test Coming Soon</div>}/>

       <Route path="/tests/gate/instructions" element={<GateGeneralInstruction />} />
       <Route
  path="/tests/gate/mock/:id"
  element={<div className="p-10 text-center text-xl">GATE Mock Test Coming Soon</div>}
/>

<Route path="/tests/jee/instructions" element={<JeeGeneralInstruction />} />
<Route
  path="/tests/jee/mock/:id"
  element={<div className="p-10 text-center text-xl">JEE Mock Test Coming Soon</div>}
/>

<Route path="/tests/neet/instructions" element={<NeetGeneralInstruction />} />
<Route
  path="/tests/neet/mock/:id"
  element={<div className="p-10 text-center text-xl">NEET Mock Test Coming Soon</div>}
/>


<Route path="/tests/nimcet/instructions" element={<NimcetGeneralInstruction />} />

<Route
  path="/tests/nimcet/mock/:id"
  element={
    <div className="p-10 text-center text-xl">
      NIMCET Mock Test Coming Soon
    </div>
  }
/>


<Route path="/tests/upsc/instructions" element={<UpscGeneralInstruction />} />

<Route
  path="/tests/upsc/mock/:id"
  element={
    <div className="p-10 text-center text-xl">
      UPSC Mock Test Coming Soon
    </div>
  }
/>

    </Routes>
  );
}

export default App;
