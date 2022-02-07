import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../Context/State';
import Card from './Card';
import SearchnFilter from './SearchnFilter';

const Home = () => { 
let [countries,setCountries] = useState([])
let [filterBy,setFilterBy] = useState('all')
let [searchFor,setSearchFor] = useState('')
const {theme } = useContext(GlobalContext)

const fetchApi = async() => {
const data = await axios.get(`https://restcountries.com/v2/${filterBy}`)
.then(res => res.data)
.catch(err =>  err)
setCountries(data)
}

  useEffect(() => {
    searchFor.length < 1 ? fetchApi() :
    onSearch()
    document.body.classList.toggle = theme;
},[filterBy,searchFor,theme])


const onSearch = () => {

  setCountries(countries.filter(c => c.name.toLowerCase().includes(searchFor.toLowerCase())))}

return(

<>

<div className={`home ${theme}`}>

  <SearchnFilter
  filterBy={setFilterBy}
  theme={theme}
  searchFor={setSearchFor} />



  <div className="row d-flex justify-content-center">
  {countries.slice(0,24).map(country => (
<Card key={country.name} country={country} theme={theme}/>

  ))}

</div>


</div>

</>
)
}

export default Home