// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MusicSlider from "./MusicSlider";
import AnimalSlider from "./AnimalSlider";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/music">인기 차트</Link>
          </li>
          <li>
            <Link to="/animals">동물 사진</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/music" element={<MusicSlider />} />
        <Route path="/animals" element={<AnimalSlider />} />
      </Routes>
    </Router>
  );
};

export default App;
