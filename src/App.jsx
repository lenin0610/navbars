import React from "react";
import GlassCapsuleSidebar from "./components/sidebars/GlassCapsuleSidebar";
import SidebarModern from "./components/sidebars/SidebarMordern";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0eafc, #cfdef3)",
        display: "flex",
      }}
    >
      <GlassCapsuleSidebar/>
      <div style={{ marginLeft: "100px", padding: "2rem", color: "#1f2937" }}>
        <h1>Page Content</h1>
        <p>This is your main content area. The sidebar has a glass effect that now contrasts nicely with this background.</p>
      </div>
    </div>
  );
}

export default App;
