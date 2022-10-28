/*---- Importación de recursos ----*/
import React, { useContext } from 'react';
import Contexts from '../../utils/context/Contexts';

const CartItem = ({ product }) => {

  const context = useContext(Contexts.cartContext);
  const { removeItem } = context;

  return(
    <div className='cart-item'>
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


