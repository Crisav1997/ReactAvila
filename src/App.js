import logo from './logo.svg';
import './App.css';
import './components/NavBar/NavBar.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
  <div>
  <NavBar />
  <ItemListContainer greeting={"Hola Mundo"}/>
  </div>
  
  );
}

export default App;
