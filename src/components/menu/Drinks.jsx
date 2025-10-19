import { menuData } from './data';
import { Link } from 'react-router-dom';
import './Menu.css'

 export const Drinks = ()=>{


    return(<>


<section className='menu'>
       <h2>Our Menu</h2>
     <nav className='innernavigation'>
        <ul>
            <Link to="/menu"><li>main dishes</li></Link>
            <Link to='/desserts'><li>Desserts</li></Link>
             <Link to="/drinks"><li>Drinks</li></Link>
        </ul>
     </nav>
    
      <h3>Drinks</h3>
      <div className="menu-grid">
        {menuData.drinks.map(item => (
          <Link  key={item.id} to={`/menu/${item.id}`} className="menu-card">
            <img src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <span>${item.price}</span>
          </Link>
        ))}
      </div>
    </section>
    
    </>)
}