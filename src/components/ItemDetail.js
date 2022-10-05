/*---- Importación de recursos ----*/
import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

/*---- Muestra la vista de detalle de un item: ----*/
const ItemDetail = ({ item }) => {
  
  const onAdd = ( quantity ) => {
    alert(`Agregaste: ${quantity} unidades al carrito`);
  }
  
  return(
    <>
      <div className='row product-detail-container'>
        <Link to={ `/item/${item.id}` } className='col-10 offset-1 product-detail'>
          <img key={ item.id } src={ item.pictureUrl } alt={ item.id } className='product-detail-img' />
          <div className='product-detail-text'>
            <p key={ item.id } className='product-detail-title'>{ item.title }</p>
            <p key={ item.id } className='product-detail-description'>{ item.description }</p>
            <p key={ item.id } className='product-detail-price'>${ item.price }</p>
          </div>
        </Link>
      </div>
      <div className='row itemCount-container'>
        <ItemCount initial={ 1 } stock={ 5 } onAdd={ onAdd }/>
      </div>
    </>
  );
};

export default ItemDetail;