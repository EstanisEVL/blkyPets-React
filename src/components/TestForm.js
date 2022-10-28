import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { appFirebase } from '../utils/Firebase';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(appFirebase);

const TestForm = ({ userEmail }) => {

  // const initialValue = {
  //   firstName: '',
  //   lastName: '',
  //   phone: '',
  //   address: ''
  // }

  const order = {
    buyer: {
      firstName: '',
      lastName: '',
      phone: '',
      address: ''
    },
    products: ''
    // items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
    // total: fullPrice(),
    // state: setOrderState(),
    // date: setOrderDate(),
  };

  const [ buyer, setBuyer ] = useState(order);

  const captureInputs = (e) => {
    const { name, value } = e.target;
    setBuyer({ ...order.buyer, [ name ]: value });
  }

  const saveData = async(e) => {
    e.preventDefault();
    console.log(order.buyer);
    setBuyer({ ...order.buyer })
  }

  return(
    <div>
      <p>Cesión iniciada, ¡bienvenido <strong>{ userEmail }</strong>!</p>
      <Button variant='danger' onClick={ () => signOut(auth)}>
        Cerrar cesión
      </Button>
      {/* Formulario */}
      <h3>Ingresá tus datos para finalizar la compra:</h3>
      <Form className='checkout-form' onSubmit={ saveData }>
        <Form.Group >
          <Form.Label>Nombre: </Form.Label>
          <Form.Control
            type='text' 
            name='firstName'
            placeholder='Ingresá tu nombre'
            onChange={ captureInputs }
            value={ order.buyer.firstName }
            required />
        </Form.Group>
        <Form.Group >
          <Form.Label>Apellido: </Form.Label>
          <Form.Control 
            type='text'
            name='lastName'
            placeholder='Ingresá tu apellido'
            onChange={ captureInputs }
            value={ order.buyer.lastName }
            required />
        </Form.Group>
        <Form.Group >
          <Form.Label>Teléfono: </Form.Label>
          <Form.Control
            type='text'
            name='phone'
            placeholder='Ingresá tu número de teléfono'
            onChange={ captureInputs }
            value={ order.buyer.phone }
            required />
        </Form.Group>
        <Form.Group >
          <Form.Label>Dirección: </Form.Label>
          <Form.Control
          type='text'
          name='address'
          placeholder='Ingresá tu dirección'
          onChange={ captureInputs }
          value={ order.buyer.address }
          required />
        </Form.Group>
        <Button type='submit' variant='dark'>
          REALIZAR COMPRA
        </Button>
      </Form>
    </div>
  );
};

export default TestForm;