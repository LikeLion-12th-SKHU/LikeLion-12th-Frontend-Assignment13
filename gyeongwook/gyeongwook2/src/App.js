import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BasicSlider from "./components/BasicSlider";
import LoopSlider from "./components/LoopSlider";

const App = () => {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <nav>
          <ul style={{ listStyle: "none", padding: 0, marginBottom: "20px" }}>
            <li>
              <Link
                to="/basic-slider"
                style={{
                  textDecoration: "none",
                  color: "purple",
                  fontSize: "18px",
                }}
              >
                Basic Slider
              </Link>
            </li>
            <li>
              <Link
                to="/loop-slider"
                style={{
                  textDecoration: "none",
                  color: "purple",
                  fontSize: "18px",
                }}
              >
                Loop Slider
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/basic-slider" element={<BasicSlider />} />
          <Route path="/loop-slider" element={<LoopSlider />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
