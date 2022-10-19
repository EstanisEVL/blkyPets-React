/*---- Importación de recursos ----*/
import React from 'react';
import Item from './Item';
import CircleLoader from "react-spinners/ClipLoader";

/*---- Agrupada el set de componentes 'Item', recibe la prop 'items' y se encarga de mapear los items del arreglo de productos al componente '<Item … />': ----*/
const ItemList = ({ items }) => {
  return(
    items.length > 0
    ? items.map(item => <Item key={ item.id } item={ item } />)
    : <CircleLoader
    color="#131313"
    loading
    size={50}
    speedMultiplier={1} />
  );
};

export default ItemList;