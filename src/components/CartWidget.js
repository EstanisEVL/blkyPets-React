/*---- Importación de recursos ----*/
import React from 'react';
import cartImg from '../assets/img/gato_carrito.png';

/*---- Renderizar el ícono del carrito ----*/
const CartWidget = () => {
    return(
        <li className="nav-item cart"><a className="nav-link" href="#top"><img className="img-fluid" src={cartImg} alt="carrito" title="Ir a la tienda"/></a></li>
    );
}

export default CartWidget;