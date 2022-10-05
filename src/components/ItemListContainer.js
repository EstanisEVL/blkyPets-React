/*---- Importación de recursos ----*/
import React, { useState , useEffect } from 'react';
import UtilComponents from './UtilComponents';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import '../styles/main.scss';

import imgArnes from '../assets/img/Arneses.jpg';
import imgCollar from '../assets/img/Collares.jpg';
import imgCorrea from '../assets/img/Correas.jpg';
import imgMonio from '../assets/img/Monios.jpg';
import imgPortabolsita from '../assets/img/Portabolsitas.jpg';
import imgPretal from '../assets/img/Pretales.jpg';

/*---- Arreglo de productos a filtrar: ----*/
const products = [
  { id: 1, title: 'Arnés', description: '', category: 'arneses', price: 2500, pictureUrl: imgArnes },
  { id: 2, title: 'Collar', description: '', category: 'collares', price: 3000, pictureUrl: imgCollar },
  { id: 3, title: 'Correa', description: '', category: 'correas', price: 3500, pictureUrl: imgCorrea },
  { id: 4, title: 'Moño', description: '', category: 'monios', price: 4000, pictureUrl: imgMonio },
  { id: 5, title: 'Portabolsita', description: '', category: 'portabolsitas', price: 4500, pictureUrl: imgPortabolsita },
  { id: 6, title: 'Pretal', description: '', category: 'pretales', price: 5000, pictureUrl: imgPretal }
];

/*---- Componente contenedor que muestra un mensaje con una prop greeting y hace la petición a la base de datos: ----*/
const ItemListContainer = () => {
  
  const [ items, setItems ] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const getItems = new Promise(resolve => {
      setTimeout(() => {
        resolve( products );
      }, 2000);
    });
    if( categoryId ){
      getItems.then(res => setItems(res.filter(product => product.category === categoryId)));
    }else{
      getItems.then(res => setItems(res));
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

