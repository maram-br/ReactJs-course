import React, { useState } from 'react';
import Caret from '../../assets/icons/Caretdown.png'
import '../../styles/content/dropdown.css';
import { NavLink } from 'react-router-dom';
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

          <NavLink
            exact
            to={men.ref}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {({ isActive }) => (
            <div className={`dropdownlink nav-link-content ${isActive ? 'active' : ''} `}>
              {men.name}           
            </div>
            )}
          </NavLink>
      
          ))}
      </div>
    </div>
  );
}

export default Dropdown;
