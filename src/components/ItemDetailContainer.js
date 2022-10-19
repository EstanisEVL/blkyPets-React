/*---- Importación de recursos ----*/
import React, { useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import CircleLoader from "react-spinners/ClipLoader";
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore'

/*---- Renderiza el producto cuyo id coincida con el id de la ruta: ----*/
const ItemDetailContainer = () => {
  const [ item, setItem ] = useState({});
  const { itemId } = useParams(); 

  useEffect(() => {
    const db = getFirestore();
    const docQuery = doc( db, 'items', itemId);
    getDoc(docQuery)
      .then((res) => {
        if(res.exists()){
          setItem({ id: res.id, ...res.data() });
        }
      });
  },[ itemId ]);

  return item ? <ItemDetail item={ item } /> : <CircleLoader
  color="#131313"
  loading
  size={50}
  speedMultiplier={1} />;
};

export default ItemDetailContainer;