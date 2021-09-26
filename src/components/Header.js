import { useContext } from 'react'
import { GlobalContext } from '../Context/State'
import '../styles/Header.css'


const Header = () => { 

  const { switchToDark,switchToLight,theme } = useContext(GlobalContext)

return(

<div className={`header shadow-sm ${theme} container-fluid px-5 p-2 d-flex  align-items-center justify-content-between`}>
<h2>Where in the world?</h2>
<p onClick={theme === 'light' ? switchToDark : switchToLight}>
  {theme === 'light' ? 
  (<><i className="fa fa-moon-o me-2" aria-hidden="true"></i>{''}Dark Mode</>)
   : (<><i className="fa fa-sun-o" aria-hidden="true"></i>{' '}Light Mode</>)}
   </p>

</div>

)
}

export default Header