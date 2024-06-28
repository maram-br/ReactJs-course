import React from 'react';
import {Getbadgeclass} from '../helpers/getbadgeclass';
import {Getstatusclass} from '../helpers/getstatusclass';
function emptable({data}) {
  return (
    <div>
      <div className='head'>
        <h3 className='title'>Last Leaves Request</h3>
        <a className='a'>see more</a>
        </div>

                <table class="table align-middle mb-0 bg-white">
                  <thead class="bg-light">
                  <tr>
                    <th>Name</th>
                    <th>From-To</th>
                    <th>Type</th>
                    <th>Status</th>

                  </tr>
                </thead>
          <tbody>
          {data.map((employee, index) => (
            <tr key={index}>
              <td>
                <div class="d-flex align-items-center">
                  <img
                      src={employee.image}
                      alt=""
                      class="rounded-circle"
                      />
                  <div class="ms-3">
                    <p class="fw-bold mb-1">{employee.name}</p>
                    <p class="text-muted mb-0">{employee.post}</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="fw-normal mb-1">{employee.date}</p>
              </td>
              <td>
                <span className= {Getbadgeclass(employee.type)}>{ employee.type}</span>
              </td>
              <td className= {Getstatusclass(employee.status)}>{employee.status}</td>
              
            </tr>
          ))}
          </tbody>
        </table>

      </div>
  );
}

export default emptable;