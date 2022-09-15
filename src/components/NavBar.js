/*---- Renderiza una barra de menú ----*/
import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
        <nav className="nav navbar navbar-expand-lg">
            <div className="container-fluid justify-content-center" id="main">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#contenido" aria-controls="contenido" aria-expanded="false" aria-label="Toggle navigation"><img className="img-fluid navbar-toggler-icon" src="images/BarrasMenuw.png" alt="expandir" title="Expandir"/></button>
                <div className="collapse navbar-collapse align-content-center" id="contenido">
                    <ul className="navbar-nav container-fluid justify-content-evenly">
                        <li className="nav-item"><a className="nav-link fs-2" href="pages/tienda.html">Tienda</a></li>
                        <li className="nav-item"><a className="nav-link fs-2" href="pages/venta-mayorista.html">Revendedores</a></li>
                        <a className="navbar-brand" href="index.html"><img className="img-fluid" src="images/logo0blanco.png" alt="logo BLKYPets" title="Ir a Inicio" /></a>
                        <li className="nav-item"><a className="nav-link fs-2" href="pages/nosotros.html">Nosotros</a></li>
                        <li className="nav-item"><a className="nav-link fs-2" href="pages/contacto.html">Contacto</a></li>
                        <CartWidget />
                    </ul>   
                </div>
            </div>
        </nav>
    );
}

export default NavBar;