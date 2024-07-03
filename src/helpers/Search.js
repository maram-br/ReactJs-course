import React, { useState } from 'react';
import '../styles/Employees/search.css'; 
import SearchIcon from '../assets/icons/Search.png'
import icon from '../assets/icons/fi_filter.png'

function Search() {
  const [query, setQuery] = useState('');

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  
  return (
    <div className='searchblock'>
    <div className="input-wrapper">
        <div className="input-icon">
          <img src={SearchIcon} alt="Search Icon" />
        </div>
        <input
          type="text"
          placeholder="Search by ID"
          value={query}
          onChange={handleSearchChange}
          className="input"
        />
      </div>
      <button className='filterbtn' > <img src={icon} alt="Search Icon" /> Add a Filter</button>
      
    </div>
  );
}

export default Search;
