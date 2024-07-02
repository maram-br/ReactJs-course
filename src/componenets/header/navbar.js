import React from 'react';
import '../../styles/content/navbar.css';
import Notification from '../../assets/icons/Notification.png'
import Emp from '../../assets/Employee.png'
import Dropdown from './dropdownmenu';
function Navbar() {
  return (
    <header>
    <div className="nav">
        <div className='title'>
            Dashboard 
        </div>
        <div className="icon">
        <img  style={{width: '30px', height: '30px' }} src={Notification} />
        </div>
        <div className="menu-wrapper">
        <img src={Emp} style={{width: '40px', height: '40px'}} />
        <Dropdown />        
        </div>
        
        
    </div>
    </header>
  );
}

export default Navbar;