/*---- Importación de recursos ----*/
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Contexts from '../../utils/context/Contexts';

const CartItem = ({ product }) => {

  const context = useContext(Contexts.CartContext);
  const { removeItem } = context;

  return(
    <div className='cart-item'>
      <img src={product.pictureUrl} alt={product.title} />
      <div>
        <p>{product.title}</p>
        <p>Cantidad: {product.quantity} unidades</p>
        <p>Precio unitario: {product.price}</p>
        <p>Subtotal: ${product.quantity * product.price}</p>
        <Button variant='danger' onClick={() => removeItem(product.id)}>ELIMINAR</Button>
      </div>
    </div>
  );
};

export default CartItem;


