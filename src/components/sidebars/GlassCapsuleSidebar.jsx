import React, { useState } from "react";
import { FaHome, FaUser, FaCog, FaEnvelope } from "react-icons/fa";
import "./GlassCapsuleSidebar.css";

const menuItems = [
  { icon: <FaHome />, label: "Home" },
  { icon: <FaUser />, label: "Profile" },
  { icon: <FaEnvelope />, label: "Messages" },
  { icon: <FaCog />, label: "Settings" }
];

export default function GlassCapsuleSidebar() {
  const [active, setActive] = useState(0);

  return (
    <div className="glass-sidebar">
      {menuItems.map((item, index) => (
        <button
          key={index}
          className={`icon-button ${active === index ? "active" : ""}`}
          onClick={() => setActive(index)}
          title={item.label}
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
}
