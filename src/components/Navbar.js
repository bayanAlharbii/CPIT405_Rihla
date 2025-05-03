import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import "../styles.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src=" " alt="Logo" className="logo" />
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cities">Tourist Cities</Link>
        </li>
        <li>
          <Link to="/FAQ">FAQs</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
