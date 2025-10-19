import { Link } from "react-router-dom"
import "./Header.css"

function Header(){
    return(<>
      <header>
        <Link to='/' className="logoItems">
        <p>Georgian Foods</p>
        <img id="logo" src="logo.png" alt="Georgian Foods Logo" />
        </Link>
      <nav>
        <ul>
         <Link to="/"><li>Home</li></Link> 
          <Link to="/menu" ><li>Menu</li></Link>
          <Link to='/about'><li>About Us</li></Link>
         <Link to="/contact"> <li>Contact</li></Link>
        </ul>
      </nav>

      <div className="georgianFlag">
        <img src="flag.png" alt="Georgian Flag" />
      </div>
    </header>
    
    
    </>)
}

export default Header