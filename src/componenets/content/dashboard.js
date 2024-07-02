import React from 'react';
import Navbar from '../header/navbar';
import Sidebar from '../sidebar/sidebar';
import '../../styles/content/dashboard.css' ;
import Content from './content';
import Profilesection from '../profile/profilesection';
function Dashboard() {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <Sidebar />
        </div>
      <div className="content">
          <Navbar />
          <div className='cont'>
            <Content />
            <Profilesection />
          
          </div>
        </div>
    </div>
  );
}

export default Dashboard;