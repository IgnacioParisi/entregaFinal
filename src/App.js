import './components/styles.css';
import CartContext from './contexts/CartContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { NavBar } from './components/Navbar/NavBar';
import { Cart } from './components/Cart/Cart';
import { Checkout } from './components/Checkout/Checkout';
import { MainSection } from './components/MainSection/MainSection';
import { Footer } from './components/Footer/Footer';
//import { CardProduct } from './components/CardProduct/CardProduct';

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
          {/* <Route path='/cardprod' element={<CardProduct />} /> */}
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        <Footer />
      </CartContext>
    </BrowserRouter>
  ); 
}

export default App;
