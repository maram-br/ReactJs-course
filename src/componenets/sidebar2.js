import React from 'react';
import '../css/sidebar2.css';
import Profile from './profile';
function sidebar2() {
    const employee = 
        {
          image: 'https://mdbootstrap.com/img/new/avatars/8.jpg',
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