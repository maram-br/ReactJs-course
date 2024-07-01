import React from 'react';
import '../css/progresscircle.css'
function Profile({employee}) {
   
  return (
    <div>
        <div className='prof'>
       <p> <img
            src={employee.image}
            alt="my image"
            class="rounded-circle"
            style={{width:'70px', height:'70px'}}
            /></p>
        <p class="fw-bold mb-1">{employee.name}</p>
        <p class="text-muted mb-0">{employee.post}</p>
        <a className='link' href='#'>see my profile</a>
            </div>
            <p class="fw-bold mb-1" style={{ textAlign: 'left', paddingLeft: '10px'}}>My Leaves Balance</p>
            <div className='progressdiv'>
                <div className='element'>
                <div class="progress-bar" style={{ '--progress-value': employee.leaves.casual }} >
                <progress value={employee.leaves.casual} min="0" max="20" style={{ visibility: 'hidden', height: 0, width: 0 }}>{employee.leaves.casual} days</progress>
                <p>{employee.leaves.casual} days</p>

                </div>
                <p>Casual</p>
                </div>
                <div className='element'>
                <div class="progress-bar" style={{ '--progress-value': employee.leaves.sick }}>
                <progress value={employee.leaves.sick} min="0" max="20" style={{ visibility: 'hidden', height: 0, width: 0 }}></progress>
                <p>{employee.leaves.sick} days</p>

                </div>
                <p>sick  </p>
                </div>
                <div className='element'>
                <div class="progress-bar" style={{ '--progress-value': employee.leaves.personal }}>
                <progress value={employee.leaves.personal}  min="0" max="20" style={{ visibility: 'hidden', height: 0, width: 0 }}>{employee.leaves.personal} days</progress>
                <p>{employee.leaves.personal} days</p>
                </div>
                <p>personal </p>
                </div>
                <div className='element'>
                <div class="progress-bar" style={{ '--progress-value': employee.leaves.vacation }}>
                <progress value={employee.leaves.vacation}  min="0" max="20" style={{ visibility: 'hidden', height: 0, width: 0 }}>{employee.leaves.vacation} days</progress>
                <p>{employee.leaves.vacation} days</p>
                </div>
                <p>vacation </p>
                </div>

            </div>
            <div className= "flex">
            <p className='button'><button type="button" class="btn btn-success flex-fill m-1"><svg xmlns="http://www.w3.org/2000/svg" style={{margin: '10px'}} height="18" width="18" viewBox="0 0 448 512"><path fill="#ffffff" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>    Add New Employee</button></p>
            <p className='button'><button type="button" class="btn btn-warning flex-fill m-1" style={{color: 'white'}}><svg xmlns="http://www.w3.org/2000/svg" style={{margin: '10px'}} height="18" width="18" viewBox="0 0 384 512"><path fill="#ffffff" d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"/></svg>    Add New Department</button></p>
            <p className='button'><button type="button" class="btn btn-info flex-fill m-1" style={{color: 'white'}}><svg xmlns="http://www.w3.org/2000/svg" style={{margin: '10px'}} height="18" width="18" viewBox="0 0 512 512"><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>  Apply For a Leave</button></p>
            </div>

       </div>
  );
}

export default Profile;

