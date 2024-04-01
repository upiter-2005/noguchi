import React from 'react'
import {Link, useLocation} from "react-router-dom"
import classes from "./Header.module.scss"
import logo from "../../assets/img/logo.jpg"
import phone from "../../assets/img/phone.png"
import email from "../../assets/img/email.png"

import {Search} from '../../Components'

const Header: React.FC = () => {
  const location = useLocation();
  
  return (
    <>
     <header className={classes.header}>
      <div className={classes.header_side}>
      <Link to="/">
        <img src={logo} alt="" className={classes.logoHeader} />
      </Link>
      {(location.pathname !== '/checkout') &&  <Search/> }
      </div>
      
      <div className={`${classes.header_side} pk-visible`}>
        <a href="mailto:noguchi@gmail.com" className={classes.telephone}> <img src={email} alt="" /> noguchi@gmail.com</a>
        <a href="tel:+380981234567" className={classes.telephone}> <img src={phone} alt="" /> 093 123 45 67</a>
      </div>
    </header>

    <div className={classes.subHeader} >
      <div className={classes.mnu}>
        <Link to="#" className={classes.mnu_link}>Меню</Link>
        <Link to="#" className={classes.mnu_link}>Доставка</Link>
        <Link to="#" className={classes.mnu_link}>Інфо</Link>
      </div>
    </div>
    </>
   
  )
}
export default Header;