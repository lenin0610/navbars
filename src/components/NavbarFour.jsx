import React from "react";

const NavbarFour = () => {
  return (
    <header style={{
      background: "#fff",
      padding: "1.2rem 2rem",
      borderBottom: "1px solid #eaeaea",
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      alignItems: "center"
    }}>
      <div style={{ fontWeight: 700 }}>GridBar</div>
      <div style={{ textAlign: "center", fontSize: "1.2rem" }}>
        MiddleContent
      </div>
      <div style={{ textAlign: "right" }}>🟢</div>
    </header>
  );
};

export default NavbarFour;
