/*---- Importación de recursos ----*/
import logo from '../assets/img/logo0blanco.png';

/*---- Lista de componentes de presentación para usar en el NavBar: ----*/
const UtilComponents = {
    Categories1 : () => {
        return(
            <>
                <li className="nav-item"><a className="nav-link fs-2" href="#top">Tienda</a></li>
                <li className="nav-item"><a className="nav-link fs-2" href="#top">Revendedores</a></li>
            </>
        );
    },
    Categories2 : () => {
        return(
            <>
                <li className="nav-item"><a className="nav-link fs-2" href="#top">Nosotros</a></li>
                <li className="nav-item"><a className="nav-link fs-2" href="#top">Contacto</a></li>
            </>
        );
    },
    Brand : () => {
        return(
            <>
                <a className="navbar-brand" href="#top"><img className="img-fluid" src={logo} alt="logo BLKYPets" title="Ir a Inicio" /></a>
            </>
        );
    }
}

export default UtilComponents;