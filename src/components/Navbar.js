import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/Navbar.css";
import "../styles.css";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path, label) => {
    if (label === "Contact us") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToContact(), 100);
      } else {
        scrollToContact();
      }
    } else {
      navigate(path);
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector(".contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Cities", path: "/cities" },
    { label: "FAQs", path: "/faq" },
    { label: "Contact us", path: "/" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="/images/logo/logo1.png"
          alt="Logo"
          className="logo"
          onClick={() => navigate("/")}
        />
      </div>

      <ul className="nav-list">
        {menuItems.map((item) => (
          <li key={item.label}>
            <button
              className="nav-item-button"
              onClick={() => handleNavigate(item.path, item.label)}
              aria-label={`Go to ${item.label}`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
