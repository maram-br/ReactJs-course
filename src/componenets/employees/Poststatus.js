import React from 'react';

function poststatus({status}) {
  let className;

  switch (status) {
    case 'Full-Time':
      className = 'Full-Time';
      break;
    case 'Part-Time':
      className = 'Part-Time';
      break;}
  return (
    <div className={`cadre ${className}`}>
        {status}   
    </div>
  );
}


export default poststatus;