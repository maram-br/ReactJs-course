import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import '../css/dashboard.css' ;
import Content from './content';
import Sidebar2 from './sidebar2';
function Dashboard() {
  return (
    <div className="dashboard">
        <Sidebar />
        <div className="content">
          <Navbar />
          <div className='cont'>
            <Content />
            <Sidebar2 />
          
          </div>
        </div>
    </div>
  );
}

export default Dashboard;