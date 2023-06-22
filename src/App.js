import './components/styles.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { NavBar } from './components/Navbar/NavBar';
import { Cart } from './components/Cart/Cart';
import CartContext from './contexts/CartContext';
import { Checkout } from './components/Checkout/Checkout';
import { MainSection } from './components/MainSection/MainSection';

function App() {
  return (
    <BrowserRouter>
      <CartContext>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<MainSection />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </CartContext>
    </BrowserRouter>
  ); 
}

export default App;
