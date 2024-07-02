import React from 'react';
import Heart from '../../assets/icons/Vector.png'
import Requests from '../../assets/icons/Group 180.png'
import Timer from '../../assets/icons/Group 181.png'
import Pointjaune from '../../assets/icons/Group 183.png'
import Pointbleu from '../../assets/icons/Group 182.png'
import Fleche from '../../assets/icons/fi_trending-up.png'



function analytics({invacation,total_requests,pending_leaves}) {
  return (
    <div>
        <p className='p'>This month's analytics</p>
        <div className='ana'>
            <div className='element'>
               <p><span>Employee in Vacation </span><img src={Heart} className='iconanal'/></p> 
                <span className='number'>{invacation}</span>
                <span className='detail1' ><img src={Fleche} className='icondetail' /> +13 %</span>
            </div>
            <div className='element'>
               <p><span>Total Leave Requested </span><img src={Requests} className='iconanal'/></p> 
                <span className='number'>{total_requests}</span>
                <span className='detail2' ><img src={Pointbleu} className='icondetail' /> Total requests</span>

            </div>
            <div className='element'>
               <p><span>Pending Leaves </span><img src={Timer} className='iconanal' /></p> 
                <span className='number'>{pending_leaves}</span>
                <span className='detail3' ><img src={Pointjaune} className='icondetail' /> waiting for approvals</span>
            </div>
        </div>

    </div>
  );
}

export default analytics;