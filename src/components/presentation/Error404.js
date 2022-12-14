/*---- Importación de recursos: ----*/
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import returnLogo from '../../assets/img/logo0.png';

/*---- Componente de presentación que muestra un mensaje al usuario cuando no existe la url ingresada y lo invita a volver al inicio: ----*/
const Error404 = () => {
  return(
    <main>
      <Container fluid className='error-main'>
        <Row className='error-section'>
          <Col sm={{ span: 8, offset: 2}} className='error-section-col'>
            <h2><span>Error 404</span>  - La página no existe.</h2>
            <p>Oops, ¡La página que estas buscando no existe! Hacé click <Link to='/'>acá</Link> para volver al inicio. Si llegaste a esta página al clickear en un enlace, por favor avisanos así podemos corregir este error.</p>
            <Link to='/'><img src={ returnLogo } alt='logo BLKYPets' title='Ir al inicio' /></Link>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Error404;