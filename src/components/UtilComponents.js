/*---- Importación de recursos ----*/
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo0blanco.png';

/*---- Lista de componentes de presentación del NavBar: ----*/
const UtilComponents = {
  Categories1 : () => {
    return(
      <>
        <li className='nav-item'>
          <NavLink className='nav-link fs-2' to='/category/arneses'>Arneses</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link fs-2' to='/category/collares'>Collares</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link fs-2' to='/category/correas'>Correas</NavLink>
        </li>
      </>
    );
  },
  Categories2 : () => {
    return(
      <>
        <li className='nav-item'>
          <NavLink className='nav-link fs-2' to='/category/monios'>Moños</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link fs-2' to='/category/portabolsitas'>Portabolsitas</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link fs-2' to='/category/pretales'>Pretales</NavLink>
        </li>
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
      <p className='hero'>¡Bienvenido <span className='hero_span'>cliente</span> a BLKY Pets! Aquí podrás ver un listado de los productos disponibles:</p>
    )
  }
};

export default UtilComponents;