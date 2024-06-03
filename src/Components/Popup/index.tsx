import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import classes from './Popup.module.scss'
import { addToCard, minusItem, selectCartItemById } from '../../redux/slices/cartSlice'
import { useAppDispatch } from '../../redux/store'
import { useSelector } from 'react-redux'

type PopupProps = {
    id: number,
    img: string,
    title: string,
    description: string,
    price: string,
    closePopup: (val: boolean) => void
}
const Popup: React.FC<PopupProps> = ({ id, img, title, description, price, closePopup }) => {
    const [qty, setQty] = useState<number>(1)
    const dispatch = useAppDispatch();
    const countItem = useSelector(selectCartItemById(id));
    const count = countItem ? countItem.count : 1
    console.log(count);
    const addToCart = () => {
        dispatch(addToCard({
            id,
            title,
            img,
            price: Number(price),
            count
        }))
        toast("Товар доданий у кошик!");
    }

    useEffect(()=>{
        document.body.style.overflowY = "hidden";
        return () => {document.body.style.overflow = "auto"}
    })

    return (
        <div className={classes.popup} onClick={() => closePopup(false)}>
            <div className={classes.popup_product} onClick={e => e.stopPropagation()}>
                <img src={img} alt="" className={classes.product_img} />
                <p className={classes.product_title}>{title}</p>
                <div className={classes.product_description}>{description ? description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus enim quidem sunt laborum, saepe eius quo, sapiente qui expedita minus velit sint aspernatur labore inventore error alias deserunt repudiandae. Labore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus enim quidem sunt laborum, saepe eius quo, sapiente qui expedita minus velit sint aspernatur labore inventore error alias deserunt repudiandae. Labore?'}</div>
                <div className={classes.product_bottom}>
                    <div className={classes.product_bottom_price}>{price} грн</div>
                    <div className={classes.product_bottom_func}>
                        <div className='qty'>
                            <button onClick={() => {countItem?.count !== 1 && dispatch(minusItem(id))} }>-</button>
                            <span className="qtyNum">{count}</span>
                            <button onClick={addToCart}>+</button>
                        </div>
                        <button className={classes.addToCart} onClick={addToCart}>Додати</button>
                    </div>
                </div>

            </div>
        </div>
    )

}
export default Popup;