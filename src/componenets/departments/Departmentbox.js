import React from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Edit from '../../assets/icons/Edit.png'
function Depbox({dep}) {
  return (
    <div className='box'>
        <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg',borderRadius: '30px',   }}>

      <CardContent>
        <div className='title-container'>
      <img className='imgdep' src={dep.departimage} alt='employee' style={{width: '90px', height: '90px'}} />
      <a href='/departments/edit'><img src={Edit} alt='edit' className='edit' /></a>
      </div>
      <div className='title-container'>
      <span className='titlee'>{dep.name}</span>
      <span className='nbre'>({dep.nb_employees} Employees)</span>
      </div>
      <p className='description'>{dep.description}</p>
      <div className='title-container'>
        <img className='empimg' src={dep.empimage} alt='emp' />
        <span className='empl'>{dep.chefdepartement}</span>
</div>
       
      </CardContent>
      <CardOverflow >
        <Button className='btndep'>
See Department Employee
        </Button>
      </CardOverflow>
    </Card>
   
    </div>
  );
}

export default Depbox;