import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import ProductList from './components/home/Home';
import Nav from './components/nav/Nav';
import Single from './pages/single/Single'
import { CartProvider } from '../src/context/CardContext';
import Profile from './pages/profile/Profile'
import Footer from './components/footer/Footer'


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
          <Route exact path='/profile' element={<Profile />} />
        </Routes>
        <Footer />
      </CartProvider>


    </>

  );
};

export default App;