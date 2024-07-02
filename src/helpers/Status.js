import React from 'react';
import blue from '../assets/icons/Group 182.png'; 
import yellow from '../assets/icons/Group 183.png'; 

function Status({ status}) {
  let icon;
  let className;

  switch (status) {
    case 'Waiting for technique approval':
      icon = yellow;
      className = 'icon waiting';
      break;
    case 'Approved':
      icon = blue;
      className = 'icon approved';
      break;
  }

  return (
    <React.Fragment>
      <span className={className}>
        <img src={icon} className="iconspan" alt={status} />  {status} 
      </span>
    </React.Fragment>
  );
}

export default Status;
