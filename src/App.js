import logo from './logo.svg';
import './App.css';
import './components/NavBar/NavBar.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

// import { useEffect } from 'react';

// useEffect(()=>{
// fetch()
// },[])

function App() {
  return (
   <div>
     <NavBar />
     <ItemListContainer greeting={"Hola Mundo"}/>
     <ItemCount />
   </div>
  );
}

export default App;
