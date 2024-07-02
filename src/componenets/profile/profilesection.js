import React from 'react';
import '../../styles/profile/profilesection.css';
import Profile from './profile';
import User from '../../assets/Ellipse 1 (1).png'
function sidebar2() {
    const employee = 
        {
          image: User,
          name: 'John Doe',
          post: 'Software Engineer',
          date: '15 Jan - 20 Jan',
          leaves: {
            sick: 10,
            casual: 15,
            personal: 11,
            vacation: 6,
          }
          
        }
  return (
    <div className='side'>
        <Profile  employee={employee}/>
    </div>
  );
}

export default sidebar2;