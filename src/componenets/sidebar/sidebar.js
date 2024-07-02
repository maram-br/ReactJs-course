import React from 'react';
import '../../styles/sidebar/sidebar.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.png'
import Home from '../../assets/icons/Home.png'
import Case from '../../assets/icons/case.png'
import Settings from '../../assets/icons/Settings.png'
import User from '../../assets/icons/User.png'
import Fire from '../../assets/icons/Fire.png'
import Logout from '../../assets/icons/Logout.png'




function Sidebar() {
  return (
    <div className="sidebar">
        <img  className='logo' src={logo} alt='logo' />      
        <ul>
        <li>
          <NavLink
            exact
            to=""
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {({ isActive }) => (
            <div className={`nav-link-content ${isActive ? 'active' : ''}`}>
              <img className='iconsidebar' src={Home} alt='home' />
              Dashboard
            </div>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/My space"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {({ isActive }) => (
            <div className={`nav-link-content ${isActive ? 'active' : ''}`}>
              <img className='iconsidebar' src={Case} alt='my space' />
              My space
            </div>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/Employees"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {({ isActive }) => (
            <div className={`nav-link-content ${isActive ? 'active' : ''}`}>
              <img className='iconsidebar' src={User} alt='Employees' />
              Employees
            </div>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/leaves"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {({ isActive }) => (
            <div className={`nav-link-content ${isActive ? 'active' : ''}`}>
              <img className='iconsidebar' src={Fire} alt='Leaves' />
              Leaves
            </div>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/settings"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {({ isActive }) => (
            <div className={`nav-link-content ${isActive ? 'active' : ''}`}>
              <img className='iconsidebar' src={Settings} alt='Settings' />
              Settings
            </div>
            )}
          </NavLink>
        </li>
      </ul>
      <div className='logout'>
      <NavLink
            exact
            to="/logout"
            className='link'
          >
            <div className='nav-link-content red '>
            <img className='iconsidebar' src={Logout} alt='logout' />
            Log out
            </div>
          </NavLink>

      </div>
      </div>
  );
}

export default Sidebar;
