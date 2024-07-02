import React from 'react';
import CircularProgress from '@mui/joy/CircularProgress';
import User from '../../assets/icons/User.png'
import Depart from '../../assets/icons/Box.png'
import Sun from '../../assets/icons/Sun.png'


function Profile({employee}) {
   
  return (
    <div>
        <p className='ligne'>My info</p>
        <div className='prof'>
       <p> <img
            src={employee.image}
            alt="my image"
            class="rounded"
            style={{width:'70px', height:'70px'}}
            /></p>
        <p class="pro myname">{employee.name}</p>
        <p class="pro mypost">{employee.post}</p>
        <a className='link' href='#'>see my profile</a>
            </div>
            <p class="myleaves" style={{ textAlign: 'left', paddingLeft: '10px'}}>My Leaves Balance</p>
            <div className='progressdiv'>


                <div className='element'>
              <CircularProgress determinate value={employee.leaves.casual} color="warning"  sx={{ '--CircularProgress-size': '60px' }}>
                <p>{employee.leaves.casual} days</p>
                </CircularProgress>
                <p style={{color: 'brown'}}>Casual</p>
                </div>

                <div className='element'>
              <CircularProgress determinate value={employee.leaves.sick}  color="primary" sx={{ '--CircularProgress-size': '60px' }} >
                <p>{employee.leaves.sick} days</p>
                </CircularProgress>
                <p style={{color: 'blue'}}>Sick</p>
                </div>

                <div className='element'>
              <CircularProgress determinate value={employee.leaves.personal} color="success"  sx={{ '--CircularProgress-size': '60px' }}>
                <p>{employee.leaves.personal} days</p>
                </CircularProgress>
                <p style={{color: 'darkgreen'}}>Personal</p>
                </div>

                <div className='element'>
              <CircularProgress determinate value={employee.leaves.vacation} color="danger"  sx={{ '--CircularProgress-size': '60px' }}>
                <p>{employee.leaves.vacation} days</p>
                </CircularProgress>
                <p style={{color: 'red'}}>Vacation</p>
                </div>

            </div>
            <div className= "flex">
            <div className='but'><button className='newemp' type="button" style={{color: 'white'}} ><img src={User} className='iconbtn' />   Add New Employee</button></div>
            <div className='but'><button className='newdep' type="button"  style={{color: 'white'}}><img src={Depart} className='iconbtn' /> Add New Department</button></div>
            <div className='but'><button className='leave' type="button" style={{color: 'white'}}><img src={Sun} className='iconbtn' />Apply For a Leave</button></div>
            </div>

       </div>
  );
}

export default Profile;

