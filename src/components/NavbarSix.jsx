import React from "react";

const NavbarSix = () => {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        backgroundColor: "#000000", // Entire navbar black
        borderBottom: "1px solid #1f2937",
        boxShadow: "0 2px 4px rgba(255, 255, 255, 0.05)",
        width: "100%",
      }}
    >
      {/* Brand */}
      <div
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: 700,
          color: "#ffffff",
          padding: "1rem 0 0.5rem 0",
        }}
      >
        MyBrand
      </div>

      {/* Menu */}
      <div
        style={{
          marginTop: "0.2rem",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
          fontSize: "1rem",
          padding: "0.75rem 0",
          backgroundColor: "#000000", // Menu also black
          borderTop: "1px solid #1f2937",
        }}
      >
        {["Home", "About", "Services", "Contact"].map((item, index, arr) => (
          <React.Fragment key={item}>
            <span
              style={{
                cursor: "pointer",
                color: "#f9fafb",
                transition: "color 0.2s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#60a5fa")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#f9fafb")}
            >
              {item}
            </span>
            {index !== arr.length - 1 && (
              <span style={{ color: "#4b5563" }}>|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default NavbarSix;
