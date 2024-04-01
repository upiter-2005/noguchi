import React, {useState} from 'react'
import classes from './Checkout.module.scss'
import { CartItem } from '../../Components'
import { useSelector } from 'react-redux'
import { selectCart } from "../../redux/slices/cartSlice"

 const Checkout: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [secondName, setSecondName] = useState<string>('')
  const [tel, setTel] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [comment, setComment] = useState<string>('')

  const { items, totalPrice } = useSelector(selectCart)

  const formHandler = () => {

  }
  return (
    <div className={classes.checkoutWrapper}>
      <h1>Оформити замовлення</h1>
      <div className={classes.checkoutWrapper_row}>

        <div className={classes.checkout_form}>
          <form onClick={formHandler}>
            <input type="text" placeholder="Ваше ім'я" value={name} />
            <input type="text" placeholder="Ваше призвище" />
            <input type="text" placeholder="Ваш телефон" />
            <input type="text" placeholder="Ваша адреса" />
            <textarea name="" placeholder='Ваш коментар до замовлення'></textarea>
            <button type='submit'>Выдправити</button>
          </form>
        </div>

        <div className={classes.checkout_basket}>
        {
          items &&
          items?.map((obj: any) => <CartItem id={obj.id} title={obj.title} img={obj.img} price={obj.price} count={obj.count} key={obj.id}/>)
        }
        </div>

      </div>
    </div>
  )
}
export default Checkout;