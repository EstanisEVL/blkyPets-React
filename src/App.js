import './scss/styles.scss';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <h1>BLKY Pets</h1>
    </div>
  );
}

export default App;
