import React from 'react';
import Analytics from './analytics';
import '../../styles/content/content.css'
import Emptable from './emptable';
import Employee2 from '../../assets/Employee2.png';
function content() {
    const sampleData = [
        {
          image: Employee2,
          name: 'John Doe',
          post: 'Software Engineer',
          date: '15 Jan - 20 Jan',
          type: 'Personal Leave',
          status: 'Waiting for technique approval'
        },
        {
          image: Employee2,
          name: 'Jane Smith',
          post: 'UI/UX Designer',
          date: '12 Feb - 14 Feb',
          type: 'Casual Leave',
          status: 'Approved'
        },
  {
    image: Employee2,
    name: 'John Doe',
    post: 'Software Engineer',
    date: '15 Jan - 20 Jan',
    type: 'Sick Leave',
    status: 'Waiting for technique approval'
  },
  {
    image: Employee2,
    name: 'Jane Smith',
    post: 'UI/UX Designer',
    date: '12 Feb - 14 Feb',
    type: 'Vacation Leave',
    status: 'Approved'
  },
  {
    image: Employee2,
    name: 'Jane Smith',
    post: 'UI/UX Designer',
    date: '12 Feb - 14 Feb',
    type: 'Personal Leave',
    status: 'Approved'
  },
  {
    image: Employee2,
    name: 'Jane Smith',
    post: 'UI/UX Designer',
    date: '12 Feb - 14 Feb',
    type: 'Sick Leave',
    status: 'Waiting for technique approval'
  }

]
  return (
    <div className='contcomp'>
        <Analytics  invacation='45' total_requests='45' pending_leaves='12'/>
        <div className='head'>
        <p className='titre'>Last Leaves Request</p>
        <a className='linkseemore'>see more</a>
        </div>
        <Emptable data={sampleData} />
    </div>
  );
}

export default content;