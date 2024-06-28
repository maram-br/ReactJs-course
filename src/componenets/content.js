import React from 'react';
import Analytics from './analytics';
import '../css/content.css'
import Emptable from './emptable';
function content() {
    const sampleData = [
        {
          image: 'https://mdbootstrap.com/img/new/avatars/8.jpg',
          name: 'John Doe',
          post: 'Software Engineer',
          date: '15 Jan - 20 Jan',
          type: 'Personal Leave',
          status: 'Waiting for technique approval'
        },
        {
          image: 'https://mdbootstrap.com/img/new/avatars/8.jpg',
          name: 'Jane Smith',
          post: 'UI/UX Designer',
          date: '12 Feb - 14 Feb',
          type: 'Casual Leave',
          status: 'Approved'
        },
  {
    image: 'https://mdbootstrap.com/img/new/avatars/8.jpg',
    name: 'John Doe',
    post: 'Software Engineer',
    date: '15 Jan - 20 Jan',
    type: 'Sick Leave',
    status: 'Waiting for final approval'
  },
  {
    image: 'https://mdbootstrap.com/img/new/avatars/8.jpg',
    name: 'Jane Smith',
    post: 'UI/UX Designer',
    date: '12 Feb - 14 Feb',
    type: 'Vacation Leave',
    status: 'Approved'
  },
  {
    image: 'https://mdbootstrap.com/img/new/avatars/8.jpg',
    name: 'Jane Smith',
    post: 'UI/UX Designer',
    date: '12 Feb - 14 Feb',
    type: 'Personal Leave',
    status: 'Approved'
  },
  {
    image: 'https://mdbootstrap.com/img/new/avatars/8.jpg',
    name: 'Jane Smith',
    post: 'UI/UX Designer',
    date: '12 Feb - 14 Feb',
    type: 'Sick Leave',
    status: 'Waiting for final approval'
  }

]
  return (
    <div className='contcomp'>
        <Analytics  invacation='45' total_requests='45' pending_leaves='12'/>
        <Emptable data={sampleData} />
    </div>
  );
}

export default content;