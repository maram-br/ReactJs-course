import React from 'react';
import Inputform from '../employees/inputform'
import { useState } from 'react';
import '../../styles/Employees/form.css'
import Selectform from './selectform';
import FileInputComponent from './FileInput'
function Form() {
    const [formData, setFormData] = useState({
        id: '',
        fullname: '',
        email: '',
        phone: '',
        birthday: '',
        gender: '',
        address: '',
        jobTitle: '',
        hiring_date: '',
        department: '',
        status: '',
        working_days: '',
        total_balance: '',
        leave_rate: '',
        leave_balance:[{
            type:'Sick Leave',
            total:'',
            available: ''
        },
        {
            type:'Casual Leave',
            total:'',
            available: ''
        },
        {
            type:'Personal Leave',
            total:'',
            available: ''
        },
        {
            type:'Vacation Leave',
            total:'',
            available: ''
        },
        ],
        file: null,
      });

  const departmentOptions = [
    { value: 'hr', label: 'HR' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'marketing', label: 'Marketing' },
  ];

  const statusOptions = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'onLeave', label: 'On Leave' },
  ];
  const handleFileChange = (file) => {
    setFormData({
      ...formData,
      file,
    });
  };

      const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
          ...formData,
          [name]: files ? files[0] : value,
        });
      };
    
      const handleSave = (e) => {
        e.preventDefault();
        console.log(formData);
      };
    
      const handleCancel = () => {
        setFormData({
            id: '',
            fullname: '',
            email: '',
            phone: '',
            birthday: '',
            gender: '',
            address: '',
            jobTitle: '',
            hiring_date: '',
            department: '',
            status: '',
            working_days: '',
            total_balance: '',
            leave_rate: '',
            leave_balance:[{
                type:'Sick Leave',
                total:'',
                available: ''
            },
            {
                type:'Casual Leave',
                total:'',
                available: ''
            },
            {
                type:'Personal Leave',
                total:'',
                available: ''
            },
            {
                type:'Vacation Leave',
                total:'',
                available: ''
            },
            ],
            file: null,
          });
      };
    
  return (
    <div className="formcontent">
      <form onSubmit={handleSave}>
      <div className='uploadbuttons'>
        <div className='filediv'>
        <FileInputComponent
          label="Upload File:"
          name="file"
          onFileChange={handleFileChange}
        />          
        </div>
        <div className='buttons'>
        <button type="button" className='bton cancelbtn' >
        Cancel          
        </button>
        <button type="button" className='bton savebtn' >
        Save
        </button>
          </div> 
        </div>
        <div className='formcontainer'>
      <div className='personal'>
        <p className='semiformtitle'>Personal Info</p>
        <Inputform
          label="ID"
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
        />
         <Inputform
          label="Full Name"
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
        />
        <Inputform
          label="Email Address"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Inputform
          label="Phone Number"
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <Inputform
          label="Birthday"
          type="text"
          name="birthday"
          value={formData.birthday}
          onChange={handleChange}
        />
        <Inputform
          label="Gender"
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        />
        <Inputform
          label="Address"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        </div>
        <div className='personal'>
        <p className='semiformtitle'>Professional Info</p>
        <Inputform
          label="Hiring Date"
          type="text"
          name="hiring_date"
          value={formData.hiring_date}
          onChange={handleChange}
        />
         <Inputform
          label="Job Title"
          type="text"
          name="job_title"
          value={formData.jobTitle}
          onChange={handleChange}
        />
         <Selectform
          label="Department"
          name="department"
          options={departmentOptions}
          value={formData.department}
          onChange={handleChange}
          required
        />
        <Selectform
          label="Status"
          name="status"
          options={statusOptions}
          value={formData.status}
          onChange={handleChange}
          required
        />
        <Inputform
          label="Working Days"
          type="text"
          name="Working_days"
          value={formData.working_days}
          onChange={handleChange}
        />
        <Inputform
          label="Leave Balance"
          type="text"
          name='total_balance'
          value={formData.total_balance}
          onChange={handleChange}
        />
        <Inputform
          label="Leave Rate"
          type="text"
          name="leave_rate"
          value={formData.leave_rate}
          onChange={handleChange}
        />

          </div>
        </div>
        <div className='formcontainer '>
      <div className='personal below'>
      <p className='semiformtitle'>Leave Balance</p>
      <div className="form-group labels">
        <p className='generallabel'>Leave Type</p>
        <p className='generallabel'>Total Balance</p>
        <p className='generallabel'>Available Leaves</p>
        </div>
      {formData.leave_balance.map((leave, index) => (
        <div className="form-group input2">
        <label htmlFor='sick'>{leave.type}</label>
        <input
          type='number'
          id='total'
          name='total'
          value={leave.total}
          onChange={handleChange}
        />

        <input
          type='number'
          id='available'
          name='available'
          value={leave.available}
          onChange={handleChange}
        />
        </div>

        ))}
      </div>
      <div className='personal below'>
      <p className='semiformtitle'>Leave History</p>
        <p className='leavehistory'>Leave History is empty</p>
      </div>
      </div>
        
      </form>

       

        </div>
    
        
  );
}

export default Form;