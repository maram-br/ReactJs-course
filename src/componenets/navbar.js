import React from 'react';
import '../css/navbar.css';
function Navbar() {
  return (
    <header>
    <div className="nav">
        <div className='title'>
            <h2>Dashboard </h2>
        </div>
        <div className="menu-wrapper">
       
        <div>
        <ul className="menu">
        <li className="dropdown">
            <a href="javascript:void(0)" class="dropbtn"><svg  xmlns="http://www.w3.org/2000/svg"  color="black" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
            </a>
            <div className="dropdown-content">
            <a href="#link1">My profile</a>
            <a href="#link2">My leaves</a>
            <a href="#link3">Settings </a>
            </div>
        </li>
        </ul>
        </div>
        <div className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 448 512">
        <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"/>
        </svg>
        </div>
        </div>
        
        
    </div>
    </header>
  );
}

export default Navbar;