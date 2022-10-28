/*---- Importación de recursos ----*/
import { NavLink } from 'react-router-dom';
import NavBarCategories from '../containers/NavBarCategories';
import logo from '../../assets/img/logo0blanco.png';

/*---- Lista de componentes de presentación del NavBar: ----*/
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
      <p className='hero'>¡Bienvenido a BLKY Pets! Aquí podrás ver un listado de los productos disponibles:</p>
    )
  }
};

export default UtilComponents;