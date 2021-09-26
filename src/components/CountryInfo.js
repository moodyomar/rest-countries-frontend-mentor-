import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Context/State';
import '../styles/CountryInfo.css'




const CountryInfo = () => { 

const [getCountry,setCountry] = useState('')
const {country} = useParams()
const {theme } = useContext(GlobalContext)
let {nativeName,population,capital,region,languages,currencies,topLevelDomain,continent,flags,name,borders} = getCountry;


  useEffect(async() => {
    const data = await axios.get(`https://restcountries.com/v2/name/${country}`)
    .then(res => res.data)
    .catch(err =>  err)
    setCountry(data[0])
    console.log(flags);
    
},[])




return(

<div className={`${theme}`}>

{getCountry && 
<>
  <div className="d-flex p-5">
  <Link to="/" className={`butn ${theme} shadow`}><i className="fa fa-long-arrow-left" aria-hidden="true"></i>
Back</Link>
</div>
<div className="d-flex p-5 gap-5">
  <div className="col p-3">
  <div className="flagy mb-5 mx-auto" style={{backgroundImage:`url(${flags[0]})`}}></div>
  </div>
  <div className="col p-5">
  <h2 className="mb-4">{name}</h2>
<div className="d-flex gap-2">
  <div className="col">
  <div className="d-flex mb-1"><strong className="me-1">Native Name:</strong>{nativeName}</div>
  <div className="d-flex mb-1"><strong className="me-1">Population:</strong>{population}</div>
  <div className="d-flex mb-1"><strong className="me-1">Region:</strong>{continent}</div>
  <div className="d-flex mb-1"><strong className="me-1">Sub Region:</strong>{region}</div>
<div className="d-flex mb-5"><strong className="me-1">Capital:</strong>{capital}</div>

  </div>
  <div className="col">
  <div className="d-flex mb-1"><strong className="me-1">Top Level Domain:</strong>{topLevelDomain}</div>
  <div className="d-flex mb-1"><strong className="me-1">Currencies:</strong>{currencies.map(cur => cur.name )}</div>
  <div className="d-flex mb-1"><strong className="me-1">Languages:</strong>{languages.map(lng => <div className="me-1">{lng.name}</div> )}</div>
  </div>
</div>

<div className="d-flex mt-5">
  Border Countries: {borders.map(br => (<div className={`shadow ms-2 lng ${theme}`}>{br}</div>))}
</div>

  </div>
</div>
</>
}

</div>

)
}

export default CountryInfo