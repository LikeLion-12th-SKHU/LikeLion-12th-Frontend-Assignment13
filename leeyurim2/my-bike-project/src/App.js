import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import YamahaRPage from "./pages/YamahaRPage";
import BMWBikePage from "./pages/BMWBikePage";
import DucatiPage from "./pages/DucatiPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/yamaha-r" element={<YamahaRPage />} />
        <Route path="/bmw-bike" element={<BMWBikePage />} />
        <Route path="/ducati-bike" element={<DucatiPage />} />
      </Routes>
    </Router>
  );
}

export default App;
