import React from "react";

const NavbarFive = () => {
  return (
    <nav style={{
      padding: "1rem 2rem",
      background: "#1e1e2f",
      color: "#fff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "4px solid #00d8ff"
    }}>
      <div style={{ fontWeight: 700, fontSize: "1.2rem" }}>DarkNav</div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <div style={{ width: "1rem", height: "1rem", background: "#00d8ff", borderRadius: "50%" }}></div>
        <div style={{ width: "1rem", height: "1rem", background: "#ff0080", borderRadius: "50%" }}></div>
      </div>
    </nav>
  );
};

export default NavbarFive;
