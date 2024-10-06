import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SliderPagination from "./components/Pagination";
import SliderNavigation from "./components/Navigation";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pagination" element={<SliderPagination />} />
        <Route path="/navigation" element={<SliderNavigation />} />
      </Routes>
    </Router>
  );
}
