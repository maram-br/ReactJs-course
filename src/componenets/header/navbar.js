import React from 'react';
import '../../styles/content/navbar.css';
import Notification from '../../assets/icons/Notification.png'
import Emp from '../../assets/Employee.png'
import Dropdown from './dropdownmenu';
function Navbar({title}) {
  const menu=[
    {name: 'Settings',
      ref:'/settings'
    },
    {name: 'My Space',
      ref:'/myspace'
    },
    {name: 'My Leaves',
      ref:'/myleaves'
    }
  ]
  return (
    <header>
    <div className="nav">
        <div className='title'>
            {title}
        </div>
        <div className="icon">
        <img  style={{width: '30px', height: '30px' }} src={Notification} />
        </div>
        <div className="menu-wrapper">
        <img src={Emp} style={{width: '40px', height: '40px'}} />
        <Dropdown menu={menu}/>        
        </div>
        
        
    </div>
    </header>
  );
}

export default Navbar;