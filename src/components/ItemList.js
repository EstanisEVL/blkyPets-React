/*---- Importación de recursos ----*/
import React from 'react';
import Item from './Item';

/*---- Agrupada el set de componentes 'Item', recibe la prop 'items' y se encarga de mapear los items del arreglo de productos al componente '<Item … />': ----*/
const ItemList = ({ items }) => {
  return(
    items.map(item => <Item key={ item.id } item={ item } />)
  );
};

export default ItemList;