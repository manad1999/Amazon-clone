import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import "./checkoutProduct.css";
import { useStateValue } from './StateProvider';


function CheckoutProduct({id,image , title, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    const RemoveFrombasket= () =>{

        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id : id,
        })

    }
    console.log(image);
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct_image' src = {image}/>
        <div className='checkoutProduct_info'>
            <p className='checkoutProduct_title'>{title}</p>
            <p className='checkoutProduct_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct_rating'>
                {Array(rating).fill().map((_,i) =>
                <p><StarIcon /></p>
                
                )}
            </div>
            <button onClick={RemoveFrombasket}>Remove From Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct;