import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from "./pages/AboutUs";
import Login from './pages/Login';
import Signup from './pages/Signup';
// ===== Course Pages =====
import NimcetCard from "./pages/NimcetCard";
import Jeecard from "./pages/Jeecard";
import NeetCard from "./pages/NeetCard";
import GateCard from "./pages/GateCard";
import CuetCard from "./pages/CuetCard";
import UpscCard from "./pages/UpscCard";

// === notes import ====
import NotesHome from "./pages/NotesHome";  
import CuetNotes from "./pages/CuetNotes";
 import JeeNotes from "./pages/JeeNotes";
 import NeetNotes from "./pages/NeetNotes";
 import GateNotes from "./pages/GateNotes";
import UpscNotes from "./pages/UpscNotes";
import NimcetNotes from "./pages/NimcetNotes";





function App() {
 
  return (
    <>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/aboutus" element={<AboutUs />} />
     <Route path="/login" element={<Login/>}/>
     <Route path = "/signup" element = {<Signup/>}/>
     <Route path="/nimcetcard" element={<NimcetCard />} />
<Route path="/jeecard" element={<Jeecard />} />
<Route path="/neetcard" element={<NeetCard />} />
<Route path="/gatecard" element={<GateCard />} />
<Route path="/cuetcard" element={<CuetCard />} />
<Route path="/upsccard" element={<UpscCard />} />


<Route path="/notes" element={<NotesHome />} />

<Route path="/notes/cuet" element={<CuetNotes />} />
<Route path="/notes/gate" element={<GateNotes />} />
<Route path="/notes/jee" element={<JeeNotes />} />
<Route path="/notes/neet" element={<NeetNotes />} />
<Route path="/notes/nimcet" element={<NimcetNotes />} />
<Route path="/notes/upsc" element={<UpscNotes />} />


     </Routes>
    </>
  )
}

export default App
