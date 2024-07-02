import React from 'react';
import Status from '../../helpers/Status';
import '../../styles/content/emptable.css'
import LeaveType from '../../helpers/LeaveType';
function emptable({data}) {
  return (
    <div>
      

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
            <tr  key={index}>
              <td>
                <div class="d-flex align-items-center">
                  <img
                      src={employee.image}
                      alt=""
                      class="rounded-circle"
                      />
                  <div class="ms-3">
                    <p class="name">{employee.name}</p>
                    <p class="post">{employee.post}</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="date">{employee.date}</p>
              </td>
              <td>
                <LeaveType type={employee.type}/>
              </td>
              <td>
                <Status status={employee.status} />
                </td>
              
            </tr>
          ))}
          </tbody>
        </table>

      </div>
  );
}

export default emptable;