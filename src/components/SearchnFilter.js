import React from 'react';
import '../styles/SearchnFilter.css'


const SearchnFilter = () => { 

return(

<div className='searchNfilter container-fluid p-5 d-flex justify-content-between'>
<input type="text" className="searchInput shadow-sm" placeholder="&#xf002;     Search for a country..." />
<select name="filter" defaultValue="filter" className="filterInput shadow-sm">
<option value="filter" disabled>Filter by Region</option>
  <option value="Africa">Africa</option>
  <option value="America">America</option>
  <option value="Asia">Asia</option>
  <option value="Europe">Europe</option>
  <option value="Oceania">Oceania</option>
</select>
</div>

)
}

export default SearchnFilter