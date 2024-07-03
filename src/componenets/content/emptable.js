import React from 'react';
import Table from '../../helpers/table';
import Status from '../../helpers/Status';
import LeaveType from '../../helpers/LeaveType';


const columns = [
  {
    header: 'Name',
    field: 'name',
    render: (value, row) => (
      <div className="d-flex align-items-center">
        <img
          src={row.image}
          alt=""
          className="rounded-circle"
          style={{ width: '40px', height: '40px' }}
        />
        <div className="ms-3">
          <p className="name">{value}</p>
          <p className="post">{row.post}</p>
        </div>
      </div>
    )
  },
  {
    header: 'From-To',
    field: 'date',
    render: (value) => <p className="date">{value}</p>
  },
  {
    header: 'Type',
    field: 'type',
    render: (value) => <LeaveType type={value} />
  },
  {
    header: 'Status',
    field: 'status',
    render: (value) => <Status status={value} />
  }
];

function Emptable({data}) {
  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default Emptable ;
