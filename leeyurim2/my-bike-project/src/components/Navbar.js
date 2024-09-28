import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/yamaha-r">Yamaha R</Link>
        </li>
        <li>
          <Link to="/bmw-bike">BMW 오토바이</Link>
        </li>
        <li>
          <Link to="/ducati-bike">Ducati</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
