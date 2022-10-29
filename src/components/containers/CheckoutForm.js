import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Contexts from '../../utils/context/Contexts';
import { getAuth, signOut } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { appFirebase } from '../../utils/Firebase';
import { db } from '../../utils/Firebase';

const MySwal = withReactContent(Swal);
const auth = getAuth(appFirebase);

const CheckoutForm = ({ userEmail }) => {
  
  const context = useContext(Contexts.CartContext);
  const { cart, fullPrice, setOrderDate, setOrderState, clear } = context;
  const [ buyer, setBuyer ] = useState({});
  const navigate = useNavigate();

  const captureInputs = (e) => {
    setBuyer({ ...buyer,
      [ e.target.name ]: e.target.value
    });
  }

  const saveData = (e) => {
    e.preventDefault();
    let order = {
      buyer,
      items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
      total: fullPrice(),
      state: setOrderState(),
      date: setOrderDate(),
    };

    const dbOrder = collection( db, 'orders' );
    addDoc(dbOrder, order)
    .then(({ id }) => MySwal.fire({
      title: '¡Pedido confirmado!',
      text: `En breve recibirás un correo electrónico con los datos de tu pedido. Código del pedido: ${id}`,
      icon: 'success'
    }));
    clear(cart);
    navigate('/');
  }

  return(
    <div className='signedIn-checkout-container'>
      <Button variant='danger' onClick={ () => signOut(auth)}>
        Cerrar cesión
      </Button>
      <p className='checkout-text'>Comprando como <span>{ userEmail }</span></p>
      <h3>Ingresá tus datos para finalizar la compra:</h3>
      <Form className='signedIn-checkout-form' onSubmit={ saveData }>
        <Form.Group >
          <Form.Label>Nombre: </Form.Label>
          <Form.Control
            type='text' 
            name='firstName'
            placeholder='Ingresá tu nombre'
            onChange={ captureInputs }
            required />
        </Form.Group>
        <Form.Group >
          <Form.Label>Apellido: </Form.Label>
          <Form.Control 
            type='text'
            name='lastName'
            placeholder='Ingresá tu apellido'
            onChange={ captureInputs }
            required />
        </Form.Group>
        <Form.Group >
          <Form.Label>Teléfono: </Form.Label>
          <Form.Control
            type='text'
            name='phone'
            placeholder='Ingresá tu número de teléfono'
            onChange={ captureInputs }
            required />
        </Form.Group>
        <Form.Group >
          <Form.Label>Dirección: </Form.Label>
          <Form.Control
          type='text'
          name='address'
          placeholder='Ingresá tu dirección'
          onChange={ captureInputs }
          required />
        </Form.Group>
        <Button type='submit' variant='dark'>
          COMPRAR
        </Button>
      </Form>
    </div>
  );
};

export default CheckoutForm;