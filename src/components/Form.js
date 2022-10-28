import React, { useContext } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Contexts from './providers/CartContext';
import { db } from '../utils/Firebase';

const MySwal = withReactContent(Swal);

const Form = () => {

  const context = useContext(Contexts.cartContext);
  const { cart, fullPrice, setOrderDate, setOrderState, clear } = context;

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
    state: setOrderState(),
    date: setOrderDate(),
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    const dbOrder = collection(db, 'orders');
    addDoc(dbOrder, order)
      .then(({ id }) => MySwal.fire({
        title: '¡Pedido confirmado!',
        text: `En breve recibirás un correo electrónico con los datos de tu pedido. Código del pedido: ${id}`,
        icon: 'success'
      }));
    clear(cart);
  };

  return (
    <form className='checkout-form'>
      <h2>Ingresá tus datos para finalizar la compra:</h2>
      {/* Completar con todos los campos que pida la orden y pasar a componente Form.js*/}
      <label>Nombre: </label>
      <input type='text' name='nombre' required />
      <label>Apellido: </label>
      <input type='text' name='apellido' required />
      <label>Teléfono: </label>
      <input type='text' name='telefono' required />
      <label>Correo electrónico: </label>
      <input type='email' name='email' required />
      {/* Sólo se activa este boton si el usuario completa el formulario */}
      <button onClick={ handleCheckout }>REALIZAR COMPRA</button>
    </form>
  );
};

export default Form;