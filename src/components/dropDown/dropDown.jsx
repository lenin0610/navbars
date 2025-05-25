import React, { useState } from "react";
import "./dropDown.css";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span>Dropdown</span>
        <span className={`arrow ${isOpen ? "open" : ""}`}>▾</span>
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          <li className="dropdown-item">Item 1</li>
          <li className="dropdown-item">Item 2</li>
          <li className="dropdown-item">Item 3</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
