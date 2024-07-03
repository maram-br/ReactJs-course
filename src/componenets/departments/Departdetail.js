import React from 'react';
import Departmentbox from './Departmentbox'
import Search from '../../helpers/Search';
function Departdetail({data}) {
  return (
    <div>
         <p className='titre'>Departments</p>
        <div className='bar'>
            <Search  />
            <div  className='bouton'>
            <button className='button' >Add New Department</button>
            </div>
        </div>
    <div className='depdiv'>
        {data.map((dep,index)=> (
            <Departmentbox key={index} dep={dep} />
        ))}
</div>
    </div>
  );
}

export default Departdetail;