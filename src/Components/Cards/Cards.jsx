import Ingredients from "./Ingredients";

const Cards = ({card,handelButton}) => {
    const {recipe_image,recipe_name,short_description,ingredients,preparing_time,calories} = card ;
    // console.log('cc',card) ;

 
  
    return ( 

      
              
                  <div className="card card-compact bg-base-100 w-96 shadow-xl ">
             <figure>
                <img
                src={recipe_image}
                alt="Shoes" />
             </figure>
        <div className="card-body">
               <h2 className="card-title">{recipe_name}</h2>
               <p>{short_description}</p>
               <div >
                   <h1>Ingredients {ingredients.length} </h1>
                   <Ingredients ingredient = {ingredients}></Ingredients>
               </div>
               
                
               <div className="card-actions">
                        <button onClick={()=>handelButton(card)} className="btn  btn-primary">Buy Now</button>
               </div>
        </div>
                  </div>
     


       
    );
};


export default Cards;