import React from 'react';
import {Outlet} from 'react-router-dom';

import {Header, Footer, CartIco } from './'

 const Layout: React.FC = () => {
  return (
    <>
        <Header/>
        <Outlet />
        <CartIco />
        <Footer/>
    </>
  )
}

export default Layout;
 