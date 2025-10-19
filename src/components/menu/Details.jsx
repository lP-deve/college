import { useParams, Link } from "react-router-dom";
import { menuData } from "./data";
import './Details.css'

export const Details = () => {
  const { id } = useParams();
    const parsedId = parseInt(id);
 const food =
    menuData.foods.find(item => item.id === parsedId) ||
    menuData.drinks.find(item => item.id === parsedId) ||
    menuData.desserts.find(item => item.id === parsedId);

  return (
    <section className="food-details">
    
<div className="back"><Link to="/menu" className="back-btn">← Back to Menu</Link></div>
      <div className="details-content">
         <img  id="foodimg" src={food.img} alt="" />
        <div className="infos">
          <h2 className="title">{food.name}</h2>
          <p className="desc"><span> Description:</span> {food.description}</p>
          <h3 className="amont"><span>Perice:</span> ₾{food.price}</h3>
          <p className="flavor"><span>Flavour:</span> {food.flavor}</p>
          <p className="size"><span>Size&Amount: </span>{food.size}</p>
          <p className="calories"><span>Calories:</span>{food.calories}</p>
          <p className="traditions"> <span>History:</span>{food.tradition}</p>
        </div>
      </div>
    </section>
  );
};
