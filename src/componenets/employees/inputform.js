import React from 'react';

function InputComponent({ label, type, name, value, onChange}) {
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
  
  export default InputComponent;