import React, { useState } from 'react';
import Caret from '../../assets/icons/Caretdown.png'
import '../../styles/content/dropdown.css';

function Dropdown({menu}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    console.log(isOpen)
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <img src={Caret} alt="Caret Icon" className="caret-icon" onClick={toggleDropdown} />
      <div className={` dropdown-content ${isOpen ? 'show' : ''} `}>
      {menu.map((men, menIndex) => (
        <a key={menIndex} href={men.ref}>{men.name}</a>
      ))}
      </div>
    </div>
  );
}

export default Dropdown;
