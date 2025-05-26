import React, { useState } from "react";
import { FaHome, FaUser, FaProjectDiagram, FaCalendarAlt } from "react-icons/fa";
import "./SidebarMordern.css";

const menuItems = [
  { label: "Dashboard", icon: <FaHome /> },
  { label: "Profile", icon: <FaUser /> },
  { label: "Projects", icon: <FaProjectDiagram /> },
  { label: "Calendar", icon: <FaCalendarAlt /> },
];

export default function SidebarModern() {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="sidebar-modern">
      <div className="sidebar-header">CountX</div>
      <div className="menu">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`menu-item ${active === item.label ? "active" : ""}`}
            onClick={() => setActive(item.label)}
          >
            <span className="icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
