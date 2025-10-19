import './About.css'
export const About=()=>{
    return(<>
    
     <div className="about">
      
      <div className="text">
          
        <img src="bg.jpeg" alt=""/>
       <div className="div">
         <h1>About Us</h1>
        <div className="info">
             <p>Founded to celebrate Georgia’s rich culinary heritage, our restaurant brings generations of traditional recipes to your table. We are passionate makers of authentic dishes like Khachapuri, Khinkali, and Mtsvadi, crafted with care and fresh local ingredients. Inspired by family traditions and the flavors of the Caucasus, we invite you to experience the warmth, history, and taste of true Georgian cuisine.</p>
             <p className='none'>At our restaurant, we honor Georgia’s centuries-old culinary traditions, serving dishes that tell the story of our people and land. From the cheesy delight of Khachapuri to the juicy perfection of Khinkali, every plate is crafted with love, fresh ingredients, and a respect for heritage. Join us to savor the authentic flavors of the Caucasus and experience a meal steeped in history and warmth.</p>
        </div>
       </div>
        
      </div>

      <div className="images">

          <img className='hideno'  src="grandma.jpeg" alt="" />
         <img src="download (8).jpeg" className='hide'  alt="" />
        <img src="food.jpeg" className='hide' alt="" />
        <img  src="shoti.jpeg" alt="" />
      </div>
     </div>
    
    
    </>)
}