import React from "react";
import "./DarkModeToggle.css";
import logo from "../assets/logo.png"; // Pastikan path ini sesuai dengan lokasi gambar Anda

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div
      className="dark-mode-toggle"
      onClick={toggleDarkMode}
      title={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
    >
      <img src={logo} alt="Toggle Dark Mode" className="logo" /> {/* Ganti dengan logo */}
    </div>
  );
};

export default DarkModeToggle;