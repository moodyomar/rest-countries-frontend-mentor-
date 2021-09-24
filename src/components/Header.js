import React from 'react';
import '../styles/Header.css'


const Header = () => { 

return(

<div className='bg-white container-fluid px-5 p-2 d-flex shadow-sm align-items-center justify-content-between'>
<h2>Where in the world?</h2>
<p><i className="fa fa-moon-o me-2" aria-hidden="true"></i>Dark Mode</p>
</div>

)
}

export default Header