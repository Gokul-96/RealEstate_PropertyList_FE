import React from 'react'

const SearchBar = ({ setSearchQuery }) => {
  return (
    <div>
        <input 
         type='text'
         placeholder="Search by title / location"
         onChange={(e) => setSearchQuery(e.target.value)}
/>
    </div>
  );
};

export default SearchBar;