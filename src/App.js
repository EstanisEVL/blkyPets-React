import './scss/main.scss';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const user = 'cliente';
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <main>
        <ItemListContainer greeting={user}/>
      </main>
    </div>
  );
}

export default App;