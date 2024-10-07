import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Ex1 from "./components/ex1";
import Ex2 from "./components/ex2";
// import Ex3 from "./components/ex3";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/ex1">Slides per view auto</Link>
            </li>
            <li>
              <Link to="/ex2">Vertical</Link>
            </li>
            {/*<li>
              <Link to="/ex3">Example 3</Link>
            </li>*/}
          </ul>
        </nav>
        <Routes>
          <Route path="/ex1" element={<Ex1 />} />
          <Route path="/ex2" element={<Ex2 />} />
          {/*<Route path="/ex3" element={<Ex3 />} />*/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
