import React, { useState, useContext } from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {

  const [ cart, setCart ] = useState([]);
  // Lógica del carrito:
  // Si el producto está en el carrito:
  const isInCart = ( id ) => cart.find(product => product.id === id) ? true : false;

  // Agregar un producto al carrito:
  // No acepta duplicados.
  // Acumula cantidades.

  const addItem = ( item, quantity ) => {
    if(isInCart(item.id)){
      setCart(cart.map(product => {
        return product.id === item.id ? { ...product, quantity: product.quantity + quantity} : product;
      }));
    }else{
      setCart([...cart, {...item, quantity}]);
    };
  };

  // Remover un producto del carrito:
  const removeItem = ( id ) => {
    setCart(cart.filter(product => product.id !== id));
  };

  // Limpiar carrito:
  const clear = () => setCart([]);

  // Precio total:
  const fullPrice = () => {
    return cart.reduce((previous, current) => previous + current.quantity * current.price, 0);
  }


  // Total de productos en el cartWidget:
  const productsTotal = () => cart.reduce((acc, selectedProduct) => acc + selectedProduct.quantity, 0);


  return(
    <CartContext.Provider value={{
      isInCart,
      addItem,
      removeItem,
      clear,
      fullPrice,
      productsTotal,
      cart,
      }}>
        { children }
    </CartContext.Provider>
  );
};

export default CartProvider;