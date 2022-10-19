/*---- Importación de recursos ----*/
import React from 'react';
import { Link } from 'react-router-dom';
import cartImg from '../assets/img/gato_carrito.png';
import { useCartContext } from '../context/CartContext';

/*---- Renderiza el ícono del carrito ----*/
const CartWidget = () => {
  const { productsTotal } = useCartContext();

  return(
    <div className='cart-container'>
      <li className='nav-item cart'>
        <Link className='nav-link' to='/cart'>
          <img className='img-fluid' src={ cartImg } alt='carrito' title='Ir a la tienda'/>
        </Link>
      </li>
      <Link className='nav-link' to='/cart'>
        <span>{productsTotal() || ''}</span>
      </Link>
    </div>
  );
};

export default CartWidget;