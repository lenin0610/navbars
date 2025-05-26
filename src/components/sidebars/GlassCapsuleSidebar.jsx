import React, { useState, useEffect, useRef } from "react";
import { FaHome, FaUser, FaCog, FaEnvelope } from "react-icons/fa";
import "./GlassCapsuleSidebar.css";

const menuItems = [
  { icon: <FaHome />, label: "Home", subItems: ["Dashboard", "Activity", "Tasks"] },
  { icon: <FaUser />, label: "Profile", subItems: ["My Account", "Followers", "Edit Profile"] },
  { icon: <FaEnvelope />, label: "Messages", subItems: ["Inbox", "Sent", "Drafts"] },
  { icon: <FaCog />, label: "Settings", subItems: ["General", "Security", "Notifications"] }
];

export default function GlassCapsuleSidebar() {
  const [active, setActive] = useState(0);
  const [panelOpen, setPanelOpen] = useState(true);
  const [contentAnimating, setContentAnimating] = useState(false); // New state for content animation
  const panelRef = useRef(null);
  const indicatorRef = useRef(null);

  const handleIconClick = (index) => {
    if (active !== index) { // Only animate content if the active item changes
      setContentAnimating(true);
      setTimeout(() => {
        setActive(index);
        setContentAnimating(false);
      }, 300); // Duration matches CSS transition for fade-out
    }

    if (!panelOpen) {
      setPanelOpen(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target) && event.target.closest(".icon-button") === null) {
        setPanelOpen(false);
      }
    };

    if (panelOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [panelOpen]);

  useEffect(() => {
    const activeBtn = document.querySelector(".icon-button.active");
    const indicator = indicatorRef.current;
    if (activeBtn && indicator) {
      const btnRect = activeBtn.getBoundingClientRect();
      // Adjusting topOffset to account for sidebar's top padding and overall position
      const sidebarRect = document.querySelector(".glass-sidebar").getBoundingClientRect();
      const topOffset = btnRect.top + btnRect.height / 2 - indicator.offsetHeight / 2 - sidebarRect.top;
      indicator.style.top = `${topOffset}px`;
    }
  }, [active, panelOpen]); // Recalculate on panel open/close

  return (
    <>
      <div className="glass-sidebar">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`icon-button ${active === index ? "active" : ""}`}
            onClick={() => handleIconClick(index)}
            title={item.label}
          >
            {item.icon}
          </button>
        ))}
      </div>

      <div
        ref={panelRef}
        className={`glass-sidepanel ${panelOpen ? "open" : "closed"}`}
      >
        <div ref={indicatorRef} className="panel-indicator" />

        <div className={`panel-content ${contentAnimating ? "fade-out" : ""}`}>
          <button className="close-button" onClick={() => setPanelOpen(false)}>
            ×
          </button>
          <h2 className="panel-title">{menuItems[active].label}</h2>
          <ul className="panel-subitems">
            {menuItems[active].subItems.map((text, idx) => (
              <li key={idx} className="panel-subitem">
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </>
  );
}
