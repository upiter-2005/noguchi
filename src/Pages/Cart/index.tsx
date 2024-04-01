import React from 'react'
import {Link} from "react-router-dom"
import classes from './Cart.module.scss'
import { CartItem } from '../../Components'
import { useSelector } from 'react-redux'
import { selectCart } from "../../redux/slices/cartSlice"


const Cart: React.FC = () => {
  const { items, totalPrice } = useSelector(selectCart)

  return (
    <div className={classes.cartWrapper}>
      <h1 className={classes.title}>Кошик</h1>
      {
        items?.map((obj: any, i) => <CartItem id={obj.id} title={obj.title} img={obj.img} price={obj.price} count={obj.count} key={obj.id}/>)
      }
      <div className={classes.total}> Всього: {totalPrice}</div>
      {items.length > 0 && <Link to="/checkout" className={classes.goCheckout}>Оформити замовлення</Link>}
    </div>
  )
}
export default Cart;