/*---- Importación de recursos ----*/
import { NavLink } from 'react-router-dom';
import { NavBarCategories1, NavBarCategories2 } from './NavBarCategories';
import logo from '../assets/img/logo0blanco.png';

/*---- Lista de componentes de presentación del NavBar y el Footer: ----*/
const UtilComponents = {
  Categories1 : () => {
    return(
      <>
        <NavBarCategories1 />
      </>
    );
  },
  Categories2 : () => {
    return(
      <>
        <NavBarCategories2 />
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