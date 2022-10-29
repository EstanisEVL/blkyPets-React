/*---- Importación de recursos ----*/
import { NavLink } from 'react-router-dom';
import NavBarCategories from '../containers/NavBarCategories';
import logo from '../../assets/img/logo0blanco.png';

/*---- Lista de componentes de presentación de la barra de navegación y bienvenida: ----*/
const UtilComponents = {
  Categories : () => {
    return(
      <>
        <NavBarCategories />
      </>
    );
  },
  Brand : () => {
    return(
      <NavLink className='navbar-brand' to='/'><img className='img-fluid' src={ logo } alt='logo BLKYPets' title='Ir a Inicio' /></NavLink>
    );
  },
  Welcome : () => {
    return(
      <>
        <h1 className='welcome-h1'><span>BLKY PETS.</span> Diseñamos accesorios únicos, como tu mascota.</h1>
      </>
    )
  }
};

export default UtilComponents;