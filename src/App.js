import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './components/context/CartContext';

function App() {
  return (
    <div className="App"> 
      <CartProvider>
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting='Nuestro Catalogo'/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting='Catalogo Seleccionado'/>} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />}/>
              <Route path='/checkout' element={<Checkout />} />
            </Routes>
         </BrowserRouter> 
         </CartProvider>
    </div>
  );
}
export default App;