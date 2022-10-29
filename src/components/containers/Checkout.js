/*---- Importación de recursos ----*/
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { appFirebase } from '../../utils/Firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Container, Row, Col } from 'react-bootstrap'
import Contexts from '../../utils/context/Contexts';
import CartItem from '../presentation/CartItem';
import Login from './Login';
import CheckoutForm from './CheckoutForm';

/*---- Componente Checkout que renderiza el detalle de la orden y, si el usuario está logueado, el formulario para finalizar la compra. Si no está logueado le pide que se registre o inicie sesión: ----*/
const auth = getAuth(appFirebase);

const Checkout = () => {
  const context = useContext(Contexts.cartContext);
  const { cart, fullPrice } = context;

  const [ user, setUser ] = useState(null);

  onAuthStateChanged( auth, (firebaseUser) => {
    if(firebaseUser) {
      setUser(firebaseUser);
    } else {
      setUser(null);
    };
  });

  if(cart.length === 0){
    return(
      <div className='no-items-container'>
        <p className='cart-p'>No hay items en el carrito.</p>
        <Link className='return-link' to={'/'}>VOLVER A LA TIENDA</Link>
      </div>
    );
  }

  return(
    <main className='checkout-main'>
      <Container fluid className='checkout-container'>
        <Row className='checkout-row'>
          <Col sm={{ span: 3, offset: 2 }} className='checkout-col'>
            <h2>Detalle del pedido:</h2>
            { cart.map( product => <CartItem key={ product.id } product={ product } /> ) }
            <p className='full-price-p'>Total de tu compra: <span>$ { fullPrice() }</span></p>
          </Col>
          <Col sm={{ span: 4, offset: 1 }} className='checkout-form-container'>
            { user ? <CheckoutForm userEmail={ user.email } /> : <Login />}
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Checkout;