import './styles/main.scss';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <NavBar/>
        </header>
        <main className='container-fluid main_container'>
          <Routes>
            <Route path='/' element={ <ItemListContainer /> } />
            <Route path='/category/:categoryId' element={ <ItemListContainer /> } />
            <Route path='/item/:itemId' element={ <ItemDetailContainer /> } />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;