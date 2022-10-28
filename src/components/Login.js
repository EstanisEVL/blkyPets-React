import React, { useState } from 'react';
import { FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { appFirebase } from '../utils/Firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
// import '../styles/main.scss';

const auth = getAuth(appFirebase);

const Login = () => {

  const [ registration, setRegistration ] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.clave.value;

    if(registration){
      await createUserWithEmailAndPassword(auth, email, pass);
    } else {
      await signInWithEmailAndPassword(auth, email, pass);
    }
  }

  return(
    <div>
      <h2>
        Debes loguearte para continuar con tu compra:
      </h2>
      <h3>{ registration ? 'Registrarme' : 'Iniciar sesión'}</h3>
      <Form onSubmit={ submitHandler }>
        <Form.Group className='mb-3'>
          <Form.Label>Correo electrónico:</Form.Label>
          <Form.Control type='email' placeholder='Ingresar correo electrónico' id='email' required />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Contraseña:</Form.Label>
          <Form.Control type='password' placeholder='Ingresar contraseña' id='clave' required />
          <Form.Text className="text-muted">
          Ingresá un mínimo de 8 caracteres
          </Form.Text>
        </Form.Group>
        <Button variant='dark' type='submit'>
          { registration ? 'REGISTRAR' : 'INGRESAR'}
        </Button>
      </Form>
      <FormGroup>
        {/* <Button variant='secondary' onClick={ () => { setRegistration(!registration) }}>
          { registration ? '¡Ya estoy registrado! Iniciar sesión.' : 'No estoy registrado, crear una cuenta.'}
        </Button> */}
        { registration
        ? <Button variant='danger' onClick={ () => { setRegistration(!registration) }}> No estoy registrado, crear una cuenta. </Button>
        : <Button variant='success' onClick={ () => { setRegistration(!registration) }}> ¡Ya estoy registrado! Iniciar sesión. </Button>
        }
      </FormGroup>
    </div>
  );
};

export default Login;