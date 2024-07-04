import React from 'react';

function Selectform({ label, name, options, value, onChange }) {
  return (
    <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
    >
      <option value="">Select</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
  );
}

export default Selectform;