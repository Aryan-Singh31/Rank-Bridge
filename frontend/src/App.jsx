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
     </Routes>
    </>
  )
}

export default App
