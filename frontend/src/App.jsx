import { BrowserRouter, Routes, Route } from "react-router-dom";
import FontWrapper from "./components/FontWrapper";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import WardenDashboard from "./pages/WardenDashboard";

function App() {
  return (
    <FontWrapper>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student" element={<StudentDashboard />} />
       <Route path="/warden" element={<WardenDashboard />} />
      </Routes>
    </BrowserRouter>
    </FontWrapper>
  );
}

export default App;
