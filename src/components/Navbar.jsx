import { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">V/_C</h1>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {["Inicio", "Conócenos", "Galería", "Contacto"].map((item) => (
          <li key={item}><a href="#">{item}</a></li>
        ))}
      </ul>
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
    </nav>
  );
};

export default Navbar;
