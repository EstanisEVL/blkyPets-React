/*---- Importación de recursos ----*/
import React, { useState , useEffect } from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import UtilComponents from './UtilComponents';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import '../styles/main.scss';

/*---- Componente contenedor que muestra un mensaje de bienvenida y hace la petición a la base de datos: ----*/
const ItemListContainer = () => {
  const [ items, setItems ] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const collectionQuery = collection( db, 'items' );
    
    if( categoryId ){
      const queryFilter = query( collectionQuery, where( 'categoryId', '==', categoryId ));
      getDocs(queryFilter)
        .then(res => setItems(res.docs.map(product => ({ id: product.id, ...product.data() }))));
    }else{
      getDocs(collectionQuery)
        .then(res => setItems(res.docs.map(product => ({ id: product.id, ...product.data() }))));
    }
  }, [ categoryId ]);

  return(
    <>
      <div className='hero-container'>
        <UtilComponents.Welcome />
      </div>
      <div className='row product-card-container'>
        <div className='col-10 offset-1 product-card-catalogue'>
          <ItemList items={ items }/>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;

