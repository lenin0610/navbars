import React from "react";

const NavbarOne = () => {
  return (
    <nav style={{
      padding: "1rem 2rem",
      background: "#ffffff",
      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h1 style={{ fontWeight: 700, color: "#2c3e50" }}>BrandOne</h1>
      <input
        type="search"
        placeholder="Search..."
        style={{
          padding: "0.5rem 1rem",
          borderRadius: "9999px",
          border: "1px solid #ccc",
          outline: "none"
        }}
      />
    </nav>
  );
};

export default NavbarOne;