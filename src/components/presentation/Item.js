/*---- Importación de recursos ----*/
import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

/*---- Renderiza la card de cada producto: ----*/
const Item = ({ item }) => {
  return(
    <Col sm={2} className='product-card'>
      <img src={ item.pictureUrl } alt={ `Imagen del producto ${item.id}` } className='product-card-img' />
      <p className='product-card-title'>{ item.title }</p>
      <p className='product-card-price'>${ item.price }</p>
      <Link to={ `/item/${item.id}` }>
        <button className='product-btn'>Ir al detalle del producto</button>
      </Link>
    </Col>
  );
};

export default Item;