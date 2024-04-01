import React from 'react'
import {useLocation} from 'react-router-dom'
import classes from './CartItem.module.scss'
import {CartItem as CartItemProps, removeItem} from '../../redux/slices/cartSlice'
import { useAppDispatch } from '../../redux/store'

 const CartItem: React.FC<CartItemProps> = ({id, title, img, price, count}) => {
    const dispatch = useAppDispatch()
    const location = useLocation()
    console.log(location);

  return (
    <div className={classes.cartItem}>
        <div className={classes.cartItem_flex}>
            <img src={img} alt="" className={classes.img} />
            <p className={classes.title}>{title}</p>
        </div>
     {location.pathname === '/cart' && <div className={classes.price}>{price} грн</div>}
 
      <div className={classes.qty}>
        Кіл-сть: {count}
        <div>({count * price} грн)</div>
      </div>
      <button><img src="img/remove.png" alt="" onClick={()=>dispatch(removeItem(id))} /></button>
    </div>
  )
}
export default CartItem