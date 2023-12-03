//Card component
import { useState } from 'react';

function ProductCard({productImg, productName, price, Rating,incart,setIncart}){
    const [show, setShow] = useState(true)
    
    // adding cart value 
   const handleAdd = ()=> {
    setShow(!show)
    setIncart(incart +1)
   }
//   decresing the cart value
   const handleRemove = ()=> {
    setShow(!show)
    setIncart(incart - 1)
   }
    //  Card details with ratings and price
    return(
      <div className="cards">
      <div className="card-component border border-success border-opacity-50">
        <div>
         <img src={productImg} alt="no data"/>
            </div>
         <h5 className="productname">{productName}</h5>
         <span className="rate">{Rating}</span>
         <span className="tag">{price}</span>
         {show === true?
        //  cart button
         <button onClick={handleAdd}>Add to Cart</button>:
         <button onClick={handleRemove}>Remove from Cart</button>
        
           }
      </div>
      </div>
    )
          }
export default ProductCard;          

          
