import React, {lazy} from 'react';
import './App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Routes, Route} from 'react-router-dom';
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Category from "./Pages/Category";
import Checkout from "./Pages/Checkout";

//const Cart = lazy(()=>import(/*webpackChunkName: "Cart" */'./Pages/Cart'));


const App: React.FC = () => {
  return (
   <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='cart' element={<Cart/>} />
          <Route path='checkout' element={<Checkout/>} />
          <Route path='category/:id' element={<Category/>} />
        </Route>
      </Routes>
      <ToastContainer />
   </>
  );
}

export default App;
