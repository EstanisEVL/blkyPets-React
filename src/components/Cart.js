import React from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = () => {
  const { cart, fullPrice } = useCartContext();

  const order = {
    // agregar formulario en cart que tome los datos del comprador ingresados y los meta en éste objeto buyer:
    buyer: {
      name: 'Pablo',
      email: 'pablo@gmail.com',
      phone: '123123',
      address: 'asdd'
    },
    items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
    total: fullPrice(),
  };

  const handleCheckout = () => {
    const db = getFirestore();
    const dbOrder = collection(db, 'orders');
    addDoc(dbOrder, order)
      .then(({ id }) => console.log(id));
      // agregar catch()
  };

  // De no haber ítems muestra un mensaje, de manera condicional, diciendo que no hay ítems y un react-router Link o un botón para que pueda volver al Landing (ItemDetailContainer.js) para buscar y comprar algo:
  if(cart.length === 0){
    return(
      <div>
        <p>No hay items en el carrito.</p>
        <Link to={'/'}>VOLVER A LA TIENDA</Link>
      </div>
    );
  }

  return(
    <div>
      { cart.map( product => <CartItem key={ product.id } product={ product } /> ) }
      <p>$ { fullPrice() }</p>
      <button onClick={ handleCheckout }>FINALIZAR COMPRA</button>
    </div>
  );
};

export default Cart;