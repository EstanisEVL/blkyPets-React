/*---- Importación de recursos ----*/
import React from 'react';
import { NavLink } from 'react-router-dom';
import cartImg from '../assets/img/gato_carrito.png';

/*---- Renderiza el ícono del carrito ----*/
const CartWidget = () => {
  return(
    <li className='nav-item cart'>
      <NavLink className='nav-link' to='/cart'>
        <img className='img-fluid' src={ cartImg } alt='carrito' title='Ir a la tienda'/>
      </NavLink>
    </li>
  );
};

export default CartWidget;