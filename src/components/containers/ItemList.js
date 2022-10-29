/*---- Importación de recursos ----*/
import React from 'react';
import Item from '../presentation/Item';
import CircleLoader from "react-spinners/ClipLoader";

/*---- Agrupa el set de componentes y se encarga de mapear los productos para renderizarlos: ----*/
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