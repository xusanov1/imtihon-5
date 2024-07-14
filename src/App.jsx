import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import ProductList from './components/home/Home';
import Nav from './components/nav/Nav';
import Single from './pages/single/Single'
import { CartProvider } from '../src/context/CardContext';


const App = () => {
  return (
    <>
      <CartProvider>
        <Nav />
        <Routes>
          <Route exact path='/' element={<ProductList />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/product/:id' element={<Single />} />
        </Routes>
      </CartProvider>


    </>

  );
};

export default App;