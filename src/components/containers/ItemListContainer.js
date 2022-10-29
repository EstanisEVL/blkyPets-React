/*---- Importación de recursos ----*/
import '../../styles/main.scss';
import React, { useState , useEffect } from 'react';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { db } from '../../utils/Firebase';
import UtilComponents from '../presentation/UtilComponents';
import ItemList from '../containers/ItemList';

const MySwal = withReactContent(Swal);

/*---- Componente contenedor que muestra un mensaje de bienvenida y renderiza la colección de productos desde Firestore la base de datos en Firebase: ----*/
const ItemListContainer = () => {
  const [ items, setItems ] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const collectionQuery = query(collection( db, 'items' ), orderBy('title'));
    
    if( categoryId ){
      const queryFilter = query( collectionQuery, where( 'categoryId', '==', categoryId ));
      getDocs(queryFilter)
        .then(res => setItems(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        .catch(err => {
          return MySwal.fire({
            title: 'Error de conexión',
            text: `${err}`,
            icon: 'error',
            confirmButtonText: 'ACEPTAR'
          });
        });
    }else{
      getDocs(collectionQuery)
        .then(res => setItems(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        .catch(err => {
          return MySwal.fire({
            title: 'Error de conexión',
            text: `${err}`,
            icon: 'error',
            confirmButtonText: 'ACEPTAR'
          });
        });
    }
  }, [ categoryId ]);

  return(
    <main>
      <Container fluid className='main-container'>
        <UtilComponents.Welcome />
        <Row className='product-card-catalogue'>
          <Col className='product-card-container'>
            <ItemList items={ items }/>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default ItemListContainer;

