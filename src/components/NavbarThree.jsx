import React from "react";

const NavbarThree = () => {
  return (
    <nav style={{
      padding: "1.2rem",
      background: "linear-gradient(to right, #667eea, #764ba2)",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <div style={{ fontWeight: 600 }}>GradientNav</div>
      <button
        style={{
          backgroundColor: "white",
          color: "#764ba2",
          padding: "0.5rem 1rem",
          borderRadius: "20px",
          border: "none"
        }}
      >
        Sign In
      </button>
    </nav>
  );
};

export default NavbarThree;