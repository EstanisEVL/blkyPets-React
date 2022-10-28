import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import returnLogo from '../../assets/img/logo0.png';

const ItemError = () => {
  return(
    <>
      <main>
        <Container fluid className='error-main'>
          <Row className='error-section'>
            <Col lg={{ span: 8, offset: 2 }}>
              <h2 className='h2'><span>Error 404</span>  - La página no existe.</h2>
              <p className='fs-3'>Oops, ¡La página que estas buscando no existe! Hacé click <Link to='/'>acá</Link> para volver al inicio.</p>
              <p className='fs-3'>Si llegaste a esta página al clickear en un enlace, por favor avisanos así podemos corregir este error.</p>
              <Link to='/'><img src={ returnLogo } alt='logo BLKYPets' title='Ir al inicio' /></Link>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default ItemError;