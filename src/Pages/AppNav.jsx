import { NavLink } from 'react-router-dom'
import "../assets/css/style.css"
const AppNav = () => {
  return (
    <div>
      <nav>
        <ul>
            <li>
                <NavLink className= "nav-data" to= "/" >Home</NavLink>
            </li>
            <li>
                <NavLink className= "nav-data" to= "/product" >Product</NavLink>
            </li>
            <li>
                <NavLink className= "nav-data" to= "/contact" >Contact</NavLink>
            </li>
            <li>
                <NavLink className= "nav-data" to= "/service" >Service</NavLink>
            </li>
            <li>
                <NavLink className= "nav-data" to= "/blogs" >Blogs</NavLink>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default AppNav
