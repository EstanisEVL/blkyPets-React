/*---- Importación de recursos ----*/
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Contexts from '../../utils/context/Contexts';
import cartImg from '../../assets/img/gato_carrito.png';

/*---- Renderiza el ícono del carrito ----*/
const CartWidget = () => {
  const context = useContext(Contexts.CartContext);
  const { productsTotal } = context;

  return(
    <div className='cart-container'>
      <li className='nav-item cart'>
        <Link className='nav-link' to='/cart'>
          <img className='img-fluid' src={ cartImg } alt='carrito' title='Ir a la tienda'/>
        </Link>
      </li>
      <Link className='nav-link' to='/cart'>
        <span>{ productsTotal() || '' }</span>
      </Link>
    </div>
  );
};

export default CartWidget;