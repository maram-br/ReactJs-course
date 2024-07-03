import React from 'react';
import Departdetail from './Departdetail';
import Navbar from '../header/navbar';
import Sidebar from '../sidebar/sidebar';
import '../../styles/department/departmentdetail.css'
import Emp from '../../assets/Employee.png'
import Fill from '../../assets/icons/Ellipse 9.png'
function Departments() {
    const data=[
        {
            name:'Marketing',
            nb_employees:'324',
            description:'creative designer focusing on improving our products ',
            chefdepartement: 'hachem charfi',
            departimage: Fill,
            empimage: Emp

        },
        {
            name:'Designing',
            nb_employees:'324',
            description:'creative designer focusing on improving our products ',
            chefdepartement: 'hachem charfi',
            departimage: Fill,
            empimage: Emp

        },
        {
            name:'Marketing',
            nb_employees:'324',
            description:'creative designer focusing on improving our products ',
            chefdepartement: 'hachem charfi',
            departimage: Fill,
            empimage: Emp

        }
    ]
  return (
    <div className="dashboard">
        <div className="sidebar">
        <Sidebar />
        </div>
      <div className="content">
          <Navbar title='Holidays'/>
          <div className='container'>
            <Departdetail data={data} />          
          </div>
        </div>
    </div>
  );
}

export default Departments;