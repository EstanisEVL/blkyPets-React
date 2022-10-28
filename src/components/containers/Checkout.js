/*---- Importación de recursos ----*/
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { appFirebase } from '../../utils/Firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Contexts from '../../utils/context/Contexts';
import CartItem from '../presentation/CartItem';
import Login from '../Login';
// import Form from '../Form';
import TestForm from '../TestForm';

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






  // De no haber ítems muestra un mensaje, de manera condicional, diciendo que no hay ítems y un react-router Link o un botón para que pueda volver al Landing (ItemDetailContainer.js) para buscar y comprar algo:
  if(cart.length === 0){
    return(
      <div className='no-items-container'>
        <p className='cart-p'>No hay items en el carrito.</p>
        <Link className='return-link' to={'/'}>VOLVER A LA TIENDA</Link>
      </div>
    );
  }

  return(
    <main className='cart-main'>
      <div className='cart-items-container'>
        <h2>Detalle del pedido:</h2>
        { cart.map( product => <CartItem key={ product.id } product={ product } /> ) }
        <p className='full-price-p'>Total de tu compra: <span>$ { fullPrice() }</span></p>
      </div>
      <div>
        { user ? <TestForm userEmail={ user.email } /> : <Login />}
      </div>
    </main>
  );
};

export default Checkout;