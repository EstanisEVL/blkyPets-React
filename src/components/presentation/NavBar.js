/*---- Importación de recursos ----*/
import React from 'react';
import UtilComponents from './UtilComponents';
import CartWidget from './CartWidget';
import { Container } from 'react-bootstrap';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

/*---- Renderiza la barra de menú ----*/
const NavBar = () => {
  return(
    <header>
      <Navbar>
        <Container fluid className='navbar-container'>
          <Nav className='navbar_main'>
            <UtilComponents.Brand />
            <NavDropdown title={<span className='navbar-dropdown-span'>Tienda</span>} className='navbar-dropdown fs-2'>
              <UtilComponents.Categories />
            </NavDropdown>
            <CartWidget />
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;

