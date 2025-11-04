import { Link } from "react-router-dom"
import "./Header.css"
import { useState } from "react";


function Header(){


  const [isFirst, setIsFirst] = useState(true);

  const handleToggle = () => {
    setIsFirst(!isFirst);
  
  }

    return(<>
      <header>
        <Link to='/' className="logoItems">
        <p>Georgian Foods</p>
        <img id="logo" src="/logo.png" alt="Georgian Foods Logo" />
        </Link>
      <nav>
        <ul>
         <Link to="/"><li>Home</li></Link> 
          <Link to="/menu" ><li>Menu</li></Link>
          <Link to='/about'><li>About</li></Link>
         <Link to="/contact"> <li>book</li></Link>
        </ul>
      </nav>

      <div className="georgianFlag">
         <img
      src={isFirst ? "/flagss.jpeg" : "/logo2.jpg"}
      alt="Georgian Foods Logo"
      onClick={handleToggle}
      style={{ cursor: "pointer", width: "150px" }}
    />
      </div>
    </header>
    
    
    </>)
}

export default Header