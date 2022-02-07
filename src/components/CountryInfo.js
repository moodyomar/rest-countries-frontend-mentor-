import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Context/State';
import '../styles/CountryInfo.css'




const CountryInfo = () => { 

const [getCountry,setCountry] = useState('');
const [showMore,toggleShow] = useState(false);
const {country} = useParams();
const {theme } = useContext(GlobalContext);

let {nativeName,population,capital,region,languages,currencies,topLevelDomain,continent,flag,name,borders} = getCountry;

useEffect(() => {
  fetchApi()
},[])

const fetchApi = async() => {
const data = await axios.get(`https://restcountries.com/v2/name/${country}`)
.then(res => res.data)
.catch(err =>  err)
setCountry(data[0]) 
}

return(

<div className={`${theme} page`}>

{getCountry && 
<>
  <div className="d-flex p-5">
  <Link to="/" className={`butn ${theme} shadow`}><i className="fa fa-long-arrow-left" aria-hidden="true"></i>
Back</Link>
  </div>
<div className="infoSection px-5">

<div className="the-flag mb-5">
<div className="img" style={{backgroundImage:`url(${flag})`}}></div>
</div>

<div className="details">

<h2 className="name mb-4">{name}</h2>

  <div className="left-col">

  <div className="d-flex"><strong className="me-1">Native Name:</strong>{nativeName}</div>
  <div className="d-flex"><strong className="me-1">Population:</strong>{population}</div>
<div className="d-flex"><strong className="me-1">Region:</strong>{continent}</div>
<div className="d-flex"><strong className="me-1">Sub Region:</strong>{region}</div>
  <div className="d-flex mb-4"><strong className="me-1">Capital:</strong>{capital}</div>

  </div>
  <div className="right-col">

  <div className="d-flex"><strong className="me-1">Top Level Domain:</strong>{topLevelDomain}</div>
<div className="d-flex"><strong className="me-1">Currencies:</strong>{currencies.map(cur => cur.name)}</div>
<div className="d-flex"><strong className="me-1">Languages:</strong>{languages.map(cur => (cur.name + ', '))}</div>

  </div>

<div className="borderCountries">

{ borders &&
borders.length > 3 &&
<div className="d-flex mb-3 "><strong className="me-1">Border Countries:</strong>
{borders.slice(0,3).map(bor => (<p className={`butn ${theme} shadow mx-1`}>{bor}</p>))} <br/></div>  }
{ !showMore && <strong onClick={() => toggleShow(!showMore)} className="butn">Show All..</strong>}
{
  showMore &&
  <div className="d-flex mb-3 "><strong className="vis">Border Countries:</strong>
{borders.slice(3,6 ? 6 : borders.length -1).map(bor => (<p className={`butn ${theme} shadow mx-1`}>{bor}</p>))} <br/></div>  
}

</div>

</div>

</div>


</>
}

</div>

)
}

export default CountryInfo