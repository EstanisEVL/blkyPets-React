/*---- Importación de recursos */
import React, { useEffect, useState } from 'react';

/*---- Componente compuesto de un botón y controles para incrementar y decrementar la cantidad requerida de items: ----*/
const ItemQuantitySelector = ({ initial, stock, onAdd }) => {

  const [ count, setCount ] = useState(parseInt(initial));

  const removeItem = () => {
    setCount(count - 1);
  }

  const addItem = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    setCount(parseInt(initial));
  }, [ initial ]);

  return(
    <>
      <div className='input-group ItemQuantitySelector-main-div'>
        <div className='main-div_countInput'>
          <button className='counter-btn' type='button' disabled={ count <= 1 } onClick={ removeItem }>-</button>
          <span className='form-control counter-form'>{ count }</span>
          <button className='counter-btn' type='button' disabled={ count >= stock } onClick={ addItem }>+</button>
        </div>
        <div className='counter-addToCartBtn_container'>
          <button className='addToCartBtn-btn' disabled={ stock <= 0 } onClick={ () => onAdd(count) }>Agregar al carrito</button>
        </div>
      </div>
    </>
  );
};

export default ItemQuantitySelector;