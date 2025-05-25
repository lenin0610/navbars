// App.js
import React from "react";

import DropdownMenu from "./components/dropDown/dropDown";



function App() {
  return (
    <div style={{ backgroundColor: "#f9fafb", height: "100vh", display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "100px" }}>
      <DropdownMenu />
    </div>
  );
}

export default App;