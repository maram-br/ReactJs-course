import React from 'react';
import Search from '../../helpers/Search';
import '../../styles/Employees/employees.css';
import Mail from '../../assets/icons/Envelope.png';
import Phone from '../../assets/icons/Phone.png';
import Table from '../../helpers/table';
import Poststatus from './Poststatus';
import Edit from '../../assets/icons/fi_edit-3.png';
import Addemployee from './Addemployee';
import { useState } from 'react';
function TableEmployees({data}) {
   
    const columns = [
        {
            header: 'ID',
            field: 'id',
            render: (value) => <p className="general" >{value}</p> 
          },
        {
          header: 'Name',
          field: 'name',
          render: (value, row) => (
            <div className="d-flex align-items-center">
              <img
                src={row.image}
                alt=""
                className="rounded-circle"
                style={{ width: '40px', height: '40px' }}
              />
              <div className="ms-3">
                <p className="name">{value}</p>
                <p className="post">{row.post}</p>
              </div>
            </div>
          )
        },
        {
          header: 'Department',
          field: 'department',
          render: (value) => <p className="general">{value}</p>
        },
        
        {
          header: 'Status',
          field: 'status',
          render: (value) => <Poststatus status={value} />
        },
        {
            header: 'Contacts',
            field: 'contacts',
            render: (value,row) => (
                <div>
                <p className='general'>
                <img src={Mail} className="icontable" alt='Mail' />  {row.mail} 
              </p>
              <p className='general'>
              <img src={Phone} className="icontable" alt='Phone' />  {row.phone} 
            </p>
            </div>)
          },
          {
            header: '',
            field: '',
            render: () => (
                <div>
                <button className='btnedit'> <img src={Edit} className='iconedit'/>  Edit info </button>
            </div>)
          },
      ];
      const [showinter, setShowinter] = useState(false);

      const handleShowinter= () => {
        setShowinter(true);
      };
    
      const handleCloseinter = () => {
        setShowinter(false);
      };
  return (
    <div className='empcontent'>
        <p className='titre'>Employees List</p>
        <div className='bar'>
            <Search  />
            <div  className='bouton'>
            <button className='button'onClick={handleShowinter}>Add New Employee</button>
            {showinter && <Addemployee onClose={handleCloseinter} />}
            </div>
        </div>
        <Table columns={columns} data={data} />
        

    </div>
  );
}

export default TableEmployees;