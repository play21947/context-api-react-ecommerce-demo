import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import Cart from './Cart'
import { CartProvider } from './CartContext'
import Nav from './Nav';

function App() {
  return (
    <CartProvider>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
