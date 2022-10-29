/*---- Importación de recursos ----*/
import React, { useState } from 'react';
import { FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { appFirebase } from '../../utils/Firebase';

/*---- Componente Login que implementa el servicio de autenticación de Firebase ----*/
const auth = getAuth(appFirebase);
const MySwal = withReactContent(Swal);

const Login = () => {

  const [ registration, setRegistration ] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.clave.value;
    if(registration){
      await createUserWithEmailAndPassword(auth, email, pass);
    } else {
      await signInWithEmailAndPassword(auth, email, pass)
      .then(res => {
        MySwal.fire({
          title: 'Has iniciado sesión',
          icon: 'success'
        });
      })
      .catch(err => {
        MySwal.fire({
          title: 'Usuario y/o Contraseña incorrectos',
          text: 'Verificá los datos ingresados',
          icon: 'error'
        });
      });
    };
  };

  return(
    <div className='login-container'>
      <FormGroup className='registration-container'>
        { registration
        ? <Button variant='success' onClick={ () => { setRegistration(!registration) }}> ¡Ya estoy registrado! Iniciar sesión. </Button>
        : <Button variant='danger' onClick={ () => { setRegistration(!registration) }}> No estoy registrado, crear una cuenta. </Button>
        }
      </FormGroup>
      <h2>
        Logueate para finalizar tu compra:
      </h2>
      <h3>{ registration ? 'Registrarme' : 'Iniciar sesión'}</h3>
      <Form className='login-form' onSubmit={ submitHandler }>
        <Form.Group className='mb-3'>
          <Form.Label>Correo electrónico:</Form.Label>
          <Form.Control type='email' placeholder='Ingresar correo electrónico' id='email' required />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Contraseña:</Form.Label>
          <Form.Control type='password' placeholder='Ingresar contraseña' id='clave' required />
          <Form.Text className='text-muted login-form-small'>
          Ingresá un mínimo de 8 caracteres
          </Form.Text>
        </Form.Group>
        <Button variant='dark' type='submit'>
          { registration ? 'REGISTRAR' : 'INGRESAR'}
        </Button>
      </Form>
    </div>
  );
};

export default Login;