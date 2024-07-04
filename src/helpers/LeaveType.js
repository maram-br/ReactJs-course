import React from 'react';
import SickIcon from '../assets/icons/Group 213.png'; 
import PersonalIcon from '../assets/icons/Group 245.png'; 
import CasualIcon from '../assets/icons/Group 177.png'; 
import VacationIcon from '../assets/icons/Group 178.png'; 

function LeaveType({ type }) {
  let icon;
  let className;

  switch (type) {
    case 'Sick Leave':
      icon = SickIcon;
      className = 'icon sick';
      break;
    case 'Personal Leave':
      icon = PersonalIcon;
      className = 'icon personall';
      break;
    case 'Casual Leave':
      icon = CasualIcon;
      className = 'icon casual';
      break;
    case 'Vacation Leave':
      icon = VacationIcon; 
      className = 'icon vacation';
  }

  return (
    <React.Fragment>
      <span className={className}>
        <img src={icon} className="icontable" alt={type} />  {type} 
      </span>
    </React.Fragment>
  );
}

export default LeaveType;
