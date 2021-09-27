import React from 'react';
import '../styles/Card.css'
import {Link} from "react-router-dom";

const Card = ({country:{name,population,region,capital,flags},theme}) => { 

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

return(

<Link to={`/info-about/${name}`} className={`card ${theme} shadow-sm mx-4 my-5`}>
<div className="flag" style={{backgroundImage:`url(${flags[0]})`}}></div>
<div className="details p-3 d-flex flex-column">
  <h2 className="mb-2">{name}</h2>
  <div className="d-flex"><strong className="me-1">Population:</strong>{numberWithCommas(population)}</div>
<div className="d-flex"><strong className="me-1">Region:</strong>{region}</div>
  <div className="d-flex mb-3"><strong className="me-1">Capital:</strong>{capital}</div>
</div>
</Link> 

)
}

export default Card