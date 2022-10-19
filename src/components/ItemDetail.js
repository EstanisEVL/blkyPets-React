/*---- Importación de recursos ----*/
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount.js';
import { useCartContext } from '../context/CartContext.js';

/*---- Muestra la vista de detalle de un item: ----*/
const ItemDetail = ({ item }) => {
  const [ goToCart, setGoToCart] = useState(false);
  const { addItem } = useCartContext();

  const onAdd = ( quantity ) => {
    setGoToCart(true);
    addItem( item, quantity );
  }
  
  return(
    <>
      <div className='row product-detail-container'>
        <div className='col-10 offset-1 product-detail'>
          <img src={ item.pictureUrl } alt={ item.id } className='img-fluid' />
          <div className='product-detail-text'>
            <p className='product-detail-title'>{ item.title }</p>
            <p className='product-detail-description'>{ item.description }</p>
            <p className='product-detail-price'>${ item.price }</p>
            <div className='itemCount-container'>
              {
                // Implementar navigate() para ir al carrito:
                goToCart
                ? <Link to={'/cart'} className='checkout-btn'>VER CARRITO</Link>
                : <ItemCount initial={ 1 } stock={ 5 } onAdd={ onAdd }/>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;