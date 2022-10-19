import './styles/main.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartProvider from './context/CartContext';


function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <div className='container-fluid'>
            <header className='row navbar-container'>
              <NavBar/>
            </header>
            <main className='row main_container'>
              <Routes>
                <Route path='/' element={ <ItemListContainer /> } />
                <Route path='/category/:categoryId' element={ <ItemListContainer /> } />
                <Route path='/item/:itemId' element={ <ItemDetailContainer /> } />
                <Route path='/cart' element={ <Cart />} />
              </Routes>
            </main>
            <footer className='row footer'>
              <Footer />
            </footer>
          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  );
};

export default App;