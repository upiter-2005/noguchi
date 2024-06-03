import React, {lazy, Suspense} from 'react';
import './App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Routes, Route} from 'react-router-dom';
import Layout from "./Components/Layout";
//import Home from "./Pages/Home";
// 
//import Cart from "./Pages/Cart";
// import Category from "./Pages/Category";
// import Checkout from "./Pages/Checkout";
const Home = lazy(()=>import(/*webpackChunkName: "Home" */'./Pages/Home'));
const Cart = lazy(()=>import(/*webpackChunkName: "Cart" */'./Pages/Cart'));
const Category = lazy(()=>import(/*webpackChunkName: "Category" */'./Pages/Category'));
const Checkout = lazy(()=>import(/*webpackChunkName: "Checkout" */'./Pages/Checkout'));


const App: React.FC = () => {
  return (
   <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Suspense><Home/></Suspense>} />
          <Route path='cart' element={<Suspense><Cart/></Suspense>} />
          <Route path='checkout' element={<Suspense><Checkout/></Suspense>} />
          <Route path='category/:id' element={<Suspense><Category/></Suspense>} />
        </Route>
      </Routes>
      <ToastContainer />
   </>
  );
}

export default App;
