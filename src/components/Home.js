import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';


const Home = () => { 
let [countries,setCountries] = useState([])

const fetchApi = async() => {
const data = await axios.get('https://restcountries.com/v2/all')
.then(res => res.data)
.catch(err =>  err)
setCountries(data)
}

  useEffect(() => {
fetchApi()
})

return(

<div className='px-5'>
  <div className="row d-flex justify-content-center">
    {countries.map(country => (
<Card key={country.name} country={country} />
    ))}

  </div>
</div>

)
}

export default Home