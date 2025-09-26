// src/components/Header.jsx
import React from "react";

function Header() {
  return (
    <header style={{
      background: "#000",
      padding: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "16px"
    }}>
      <img src="calculanator-logo.png" alt="Logo Calculanator" style={{ height: "60px" }} />
      <h1 style={{ color: "#f7c948", margin: 0 }}>Hevieri Tools</h1>
    </header>
  );
}

export default Header;
