/*---- Importación de recursos ----*/
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Contexts from '../../utils/context/Contexts';
import ItemQuantitySelector from './ItemQuantitySelector';
// usar Navigate: import { Navigate } from 'react-router-dom';

/*---- Muestra la vista de detalle de un item: ----*/
const ItemDetail = ({ item }) => {
  const context = useContext(Contexts.cartContext);
  const { addItem } = context;

  const [ goToCart, setGoToCart] = useState(false);

  const onAdd = ( quantity ) => {
    setGoToCart(true);
    addItem( item, quantity );
  }
  
  return(
    <main>
      <Container fluid className='main_container'>
        <Row className='product-detail-container'>
          <Col className='product-detail'>
            <img src={ item.pictureUrl } alt={ item.id } className='img-fluid product-detail-img' />
            <div className='product-detail-text'>
              <p className='product-detail-title'>{ item.title }</p>
              <p className='product-detail-description'>{ item.description }</p>
              <p className='product-detail-price'>${ item.price }</p>
              <div className='ItemQuantitySelector-container'>
                {
                  goToCart
                  ? <Link to={ '/cart' } className='checkout-btn'>VER CARRITO</Link>
                  : <ItemQuantitySelector initial={ 1 } stock={ 5 } onAdd={ onAdd }/>
                }
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default ItemDetail;