import './styles/main.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/presentation/NavBar';
import Footer from './components/presentation/Footer';
import ItemListContainer from './components/containers/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import Checkout from './components/containers/Checkout';
import CartContext from './components/providers/CartContext';
import Error404 from './components/presentation/Error404';

function App() {
  return (
    <CartContext>
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={
            <ItemListContainer />
            }/>
          <Route exact path='/category/:categoryId' element={
            <ItemListContainer />
            }/>
          <Route exact path='/item/:itemId' element={
            <ItemDetailContainer />
            }/>
          <Route exact path='/cart' element={
            <Checkout />
            }/>
          <Route path='*' element={
            <Error404 />
            } />
        </Routes>
        <Footer />
      </Router>
    </CartContext>
  );
};

export default App;