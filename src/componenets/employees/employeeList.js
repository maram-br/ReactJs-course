import React from 'react';
import Sidebar from '../sidebar/sidebar'
import Navbar from '../header/navbar';
import TableEmployees from './TableEmployees';
import Employee2 from '../../assets/Employee2.png';

function Employees() {
    const data = [
        {
            id: 1,
            image: Employee2,
            name: 'John Doe',
            post: 'Software Engineer',
            department: 'Design department',
            status: 'Full-Time',
            mail: 'marambenrhouma@gmail.com',
            phone: '+216 24 567 876',


        },
        {
            id:2,
          image: Employee2,
          name: 'John Doe',
          post: 'Software Engineer',
          department: 'Design department',
          status: 'Part-Time',
          mail: 'marambenrhouma@gmail.com',
          phone: '+216 24 567 876',
        },
  {
    id: 3,
    image: Employee2,
    name: 'John Doe',
    post: 'Software Engineer',
    department: 'Design department',
    status: 'Part-Time',
    mail: 'marambenrhouma@gmail.com',
    phone: '+216 24 567 876',
  },
  {
    id: 4,
    image: Employee2,
    name: 'Jane Smith',
    post: 'UI/UX Designer',
    department: 'Design department',
    status: 'Part-Time',
    mail: 'marambenrhouma@gmail.com',
    phone: '+216 24 567 876',
  },
  {
    id: 5,
    image: Employee2,
    name: 'Jane Smith',
    post: 'UI/UX Designer',
    department: 'Design department',
    status: 'Part-Time',
    mail: 'marambenrhouma@gmail.com',
    phone: '+216 24 567 876',
  },
  {
    id:6,
    image: Employee2,
    name: 'Jane Smith',
    department: 'Design department',
    status: 'Part-Time',
    mail: 'marambenrhouma@gmail.com',
    phone: '+216 24 567 876',
  }

]
  return (
<div className="dashboard">
      <div className="sidebar">
        <Sidebar />
        </div>
      <div className="content">
          <Navbar title='Employees'/>
          <div style={{marginLeft: '20px'}}>
            <TableEmployees data={data} />          
          </div>
        </div>
    </div>
  );
}

export default Employees;