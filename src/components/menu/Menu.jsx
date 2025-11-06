import { menuData } from './data';
import { useState } from 'react';
import './Menu.css'
import { Link } from 'react-router-dom';
export const Menu = ()=>{

 const [visibleCount, setVisibleCount] = useState(8); 

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 12); 
  };

    return(<>
    <section className='menuPage'>
  <div className="menu">
      <h2>Our Menu</h2>
     <nav className='innernavigation'>
        <ul>
            <Link to="/menu"><li>main dishes</li></Link>
            <Link to='/desserts'><li>Desserts</li></Link>
             <Link to="/drinks"><li>Drinks</li></Link>
        </ul>
     </nav>

      <h3>Main Dishes</h3>
      <div className="menu-grid">
        {menuData.foods.slice(0, visibleCount).map(item => (
          <Link key={item.id} to={`/menu/${item.id}`} className="menu-card">
            <img src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <span>₾{item.price}</span>
          </Link>
        ))}
      </div>
      {visibleCount < menuData.foods.length && (
        <button className="load-more" onClick={handleLoadMore}>
          Show More
        </button>
      )}

   </div>
    </section>
    </>)
}