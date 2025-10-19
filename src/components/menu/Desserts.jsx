import { Link } from 'react-router-dom';
import { menuData } from './data';
import './Menu.css'


export const Dessets =()=>{
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
    
       <h3>Desserts</h3>
      <div className="menu-grid">
        {menuData.desserts.map(item => (
          <div key={item.id} className="menu-card">
            <img src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <span>${item.price}</span>
          </div>
        ))}
      </div>
    </section>
    
    
    
    </>)
}