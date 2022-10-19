/*---- Importación de recursos ----*/
import React from 'react';
import UtilComponents from './UtilComponents';
import CartWidget from './CartWidget';


/*---- Renderiza la barra de menú ----*/
const NavBar = () => {
  return(
    <nav className='nav navbar navbar_container'>
      <div className='container-fluid navbar_main'>
        <div className='navbar-div'>
          <ul className='navbar-nav'>
            <UtilComponents.Categories1 />
            <UtilComponents.Brand />
            <UtilComponents.Categories2 />
            <CartWidget />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

