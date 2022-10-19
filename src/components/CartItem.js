import React from 'react';
import { useCartContext } from '../context/CartContext';
import '../styles/main.scss';

const CartItem = ({ product }) => {
const { removeItem } = useCartContext()

  return(
    <div className='cartItem'>
      <img src={product.pictureUrl} alt={product.title}/>
      <div>
        <p>{product.title}</p>
        <p>{product.quantity}</p>
        <p>Precio unitario: {product.price}</p>
        <p>Subtotal: ${product.quantity * product.price}</p>
        <button onClick={() => removeItem(product.id)}>ELIMINAR</button>
      </div>
    </div>
  );
};

export default CartItem;


