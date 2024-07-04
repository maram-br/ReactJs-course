import React from 'react';
import '../../styles/Employees/addemp.css'
import Cross from '../../assets/icons/Group 3169.png'
import Form from './employeeform';
function Addemployee({ onClose }) {
 
  return (
    <div className="child">
      <div className="childcontainer">
        <div className='childhead'>
          <p className='childtitle'>Employee Details</p>
          <button className="close-button" onClick={onClose}><img className='iconemp' src={Cross} alt='cross' /></button>
        </div>
       <Form />
        </div>


    </div>
  );
}

export default Addemployee;