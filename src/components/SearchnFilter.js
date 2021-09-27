import React from 'react';
import '../styles/SearchnFilter.css'


const SearchnFilter = ({filterBy,theme,searchFor}) => { 

  const onFilter = (e) => {
let country = e.target.value
country !== 'all' ? country = `continent/${e.target.value}` : country = 'all'
filterBy(country)
  }

return(

<div className='searchNfilter container-fluid d-flex justify-content-between'>
<input type="text" className={`searchInput ${theme} shadow-sm`} placeholder="&#xf002;     Search for a country..."
onChange={e => searchFor(e.target.value)} />

<select name="filter" defaultValue="filter" className={`filterInput ${theme} shadow-sm`}
onChange={onFilter}
>
<option value="filter" disabled>Filter by Region</option>
  <option value="Africa">Africa</option>
  <option value="Americas">America</option>
  <option value="Asia">Asia</option>
  <option value="Europe">Europe</option>
  <option value="Oceania">Oceania</option>
  <option value="all">All</option>
</select>
</div>

)
}

export default SearchnFilter