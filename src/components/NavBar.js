/*---- Importación de recursos ----*/
import React from 'react';
import UtilComponents from './UtilComponents';
import CartWidget from './CartWidget';

/*---- Renderizar una barra de menú ----*/
const NavBar = () => {
    return(
        <nav className="nav navbar navbar-expand-lg navbar_container">
            <div className="container-fluid justify-content-center navbar_main" id="main">
                <div className="collapse navbar-collapse align-content-center" id="content">
                    <ul className="navbar-nav container-fluid justify-content-evenly">
                        <UtilComponents.Categories1/>
                        <UtilComponents.Brand/>
                        <UtilComponents.Categories2/>
                        <CartWidget />
                    </ul>   
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
