/*---- Importación de recursos ----*/
import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { db } from '../../utils/Firebase';
import ItemDetail from './ItemDetail';
import ItemError from '../presentation/ItemError';

const MySwal = withReactContent(Swal);

/*---- Renderiza el producto cuyo id coincida con el id de la ruta: ----*/
const ItemDetailContainer = () => {
  const [ item, setItem ] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    const docQuery = doc( db, 'items', itemId);
    getDoc(docQuery)
      .then((res) => {
        if(res.exists()){
          setItem({ id: res.id, ...res.data() });
        }
        else{
          setItem(false);
        }
      })
      .catch(err => {
        return MySwal.fire({
          title: 'Error de conexión',
          text: `${err}`,
          icon: 'error',
          confirmButtonText: 'ACEPTAR'
        });
      });
  },[ itemId ]);

  return item ? <ItemDetail item={ item } /> : <ItemError />;
};

export default ItemDetailContainer;