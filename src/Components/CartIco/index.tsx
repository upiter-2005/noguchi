import React from 'react'
import {Link} from 'react-router-dom'
import classes from './CartIco.module.scss'
import { useSelector } from 'react-redux'
import {selectCart} from "../../redux/slices/cartSlice"

 const CartIco: React.FC = () => {
  const {items} = useSelector(selectCart)
  return (
    <Link to='cart' className={classes.fixedCart}>
        <span className={classes.count}>{items.length}</span>
      <img src="../../img/shopping-cart.png" alt="" />
    </Link>
  )
}
export default CartIco;