import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // BrowserRouter import 추가
import Netflix from "./pages/Netflix";
import Japan from "./pages/Japan";
import Japan2 from "./pages/Japan2";
import "../src/style/App.css"; 

function App() {
  return (
    <Router> 
      <div>
        <Routes>
          <Route path="/" element={<Netflix />} />
          <Route path="/japan" element={<Japan />} />
          <Route path="/japan2" element={<Japan2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
