import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NextPage from "./NextPage";
import NETFLIX from "./Netflix";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NETFLIX />} />
        <Route path="/NextPage" element={<NextPage />} />
      </Routes>
    </Router>
  );
}

export default App;
