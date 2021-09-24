import React from 'react';
import '../styles/Card.css'

const Card = ({country:{name,population,region,capital,flags}}) => { 

return(

<div className='card shadow-sm mx-4 my-5'>
<div className="flag" style={{backgroundImage:`url(${flags[0]})`}}></div>
<div className="details p-3 d-flex flex-column">
  <h2 className="mb-2">{name}</h2>
  <div className="d-flex"><strong className="me-1">Population:</strong>{population}</div>
<div className="d-flex"><strong className="me-1">Region:</strong>{region}</div>
  <div className="d-flex mb-3"><strong className="me-1">Capital:</strong>{capital}</div>
</div>
</div> 

)
}

export default Card