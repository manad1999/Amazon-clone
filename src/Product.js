import React from 'react'
import './product.css'
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from './StateProvider';

export const Product = ({id , title , image, price, rating}) => {
    const [state , dispatch] = useStateValue();
    const addToBasket = () =>{

      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });

    }
  
  return (
    <div className='product'>
        <div className='product_info'>
            <p > {title}</p>
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
             {Array(rating).fill().map((_,i) =><p><StarIcon className='product_rating' /></p>  )
             }    
            </div>
            </div>
            <img className = "product_img" src={image} ></img>
        
        <button onClick={addToBasket} className='product_button'>Add to Basket</button>
    </div>
  )
}
