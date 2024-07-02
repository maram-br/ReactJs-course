import React, { useState } from 'react';
import Caret from '../../assets/icons/Caretdown.png'
import '../../styles/content/dropdown.css';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <img src={Caret} alt="Caret Icon" className="caret-icon" onClick={toggleDropdown} />
      <div className={`dropdown-content ${isOpen ? 'show' : ''} `}>
        <a href="#link1">My profile</a>
        <a href="#link2">My leaves</a>
        <a href="#link3">Settings</a>
      </div>
    </div>
  );
}

export default Dropdown;
