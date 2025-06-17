import React from "react";
import "./Header.css"; // Tambahkan file CSS baru

const Header = ({ isShaking }) => {
  return (
    <header>
      <h1 className={isShaking ? "shaking" : ""}>Jember IMEI Monitor</h1>
    </header>
  );
};

export default Header;
