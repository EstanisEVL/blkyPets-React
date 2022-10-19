/*---- Importación de recursos ----*/
import '../styles/main.scss';
import React from 'react';
import { Link } from 'react-router-dom';

/*---- Captura la prop 'item' que se le pasó desde el <ItemList /> y renderiza la card de cada producto en el arreglo ----*/
const Item = ({ item }) => {
  return(
    <div className='col-2 product-card'>
      <Link to={ `/item/${item.id}` }>
        <img src={ item.pictureUrl } alt={ `Imagen del producto ${item.id}` } className='product-card-img' />
        <p className='product-card-title'>{ item.title }</p>
        <p className='product-card-price'>${ item.price }</p>
        <button className='product-btn'>Ver detalle del producto</button>
      </Link>
    </div>
  );
};

export default Item;