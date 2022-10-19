/*---- Importación de recursos ----*/
import React from 'react';
import { Link } from 'react-router-dom';

import facebookImg from '../assets/img/facebook.png';
import instagramImg from '../assets/img/instagram.png';
import mailImg from '../assets/img/mail.png';
import whatsappImg from '../assets/img/whatsapp.png';

import amexImg from '../assets/img/american-express.png';
import visaImg from '../assets/img/visa.png';
import mastercardImg from '../assets/img/mastercard.png';
import cabalImg from '../assets/img/Cabal@2x.png';
import mercadoPagoImg from '../assets/img/mepa@2x.png';
import banelcoImg from '../assets/img/banelco@2x.png';
import rapipagoImg from '../assets/img/rappag@2x.png';
import pagoFacilImg from '../assets/img/pagfac@2x.png';

import heyWebImg from '../assets/img/logoHEYblanco.png';


/*--- Renderiza el footer ----*/
const Footer = () => {
  return(
    <>
      <div className='col-3 offset-1 footer__contacto'>
        <div>
          <h2 className='h2'>Productos</h2>
          <div className='footer-product_container'>
            <div>
              <ul>
                <li className='fs-4'><Link to='/category/arneses'>Arneses</Link></li>
                <li className='fs-4'><Link to='/category/collares'>Collares</Link></li>
                <li className='fs-4'><Link to='/category/correas'>Correas</Link></li>
              </ul>
            </div>
            <div>
              <ul>
                <li className='fs-4'><Link to='/category/monios'>Moños</Link></li>
                <li className='fs-4'><Link to='/category/portabolsitas'>Portabolsitas</Link></li>
                <li className='fs-4'><Link to='/category/pretales'>Pretales</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='col-2 offset-1 footer__redes'>
        <h4 className='h4'>Seguinos</h4>
        <ul>
          <li><a href='https://www.facebook.com/BLKYpets'><img className='img-fluid' src={ facebookImg } alt='icono facebook' title='facebook' /></a></li>
          <li><a href='https://www.instagram.com/blkypets/?hl=es'><img className='img-fluid' src={ instagramImg } alt='icono instagram' title='instagram' /></a></li>
        </ul>
        <div>
          <h4 className='h4'>Contactate</h4>
          <ul>
              <li><a href='mailto:blkypets@gmail.com'><img className='img-fluid' src={ mailImg } alt='icono mail' title='correo electrónico' /></a></li>
              <li><a href='https://www.whatsapp.com/?lang=es'><img className='img-fluid' src={ whatsappImg } alt='icono whatsapp' title='whatsapp' /></a></li>
          </ul>
        </div>
      </div>
      <div className='col-4 offset-1 footer__mediosDePago'>
        <h4 className='h4'>Medios de pago</h4>
        <div className='mediosDePago__galeria'>
          <img className='img-fluid' src={ amexImg } alt='icono american express' />
          <img className='img-fluid' src={ visaImg } alt='incono visa' />
          <img className='img-fluid' src={ mastercardImg } alt='icono mastercard' />
          <img className='img-fluid' src={ cabalImg } alt='icono cabal' />
          <img className='img-fluid' src={ mercadoPagoImg } alt='icono mercadopago' />
          <img className='img-fluid' src={ banelcoImg } alt='icono banelco' />
          <img className='img-fluid' src={ pagoFacilImg } alt='icono pagofacil' />
          <img className='img-fluid' src={ rapipagoImg } alt='icono rapipago' />
        </div>
      </div>
      <div className='col-11 footer__copyright'>
        <a className='fs-5' href='https://github.com/EstanisEVL'><img src={ heyWebImg } alt='HEY! desarrollo web' /> © | Todos los derechos reservados.</a>
      </div>
    </>
  );
};

export default Footer;