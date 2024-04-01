import React, {useEffect, useState} from 'react'
import classes from './Product.module.scss'
import { Popup } from '../../Components'
import {useSelector} from 'react-redux'
import {selectProducts} from "../../redux/slices/productsSlice"


type ProductProps = {
  id: number,
  img1: string,
  img2: string,
  title: string,
  description: string,
  props: string,
  price: string,
}
 const Product: React.FC<ProductProps> = ({id, img1, img2, title, description, props, price}) => {
  const [image1, setImage1] = useState<string>('')
  const [image2, setImage2] = useState<string>('')
  const[openPopup, setOpenPopup] = useState<boolean>(false)
  const {images} = useSelector(selectProducts)


  useEffect(()=>{
    const searchImg: any = images.filter((obj: any) => obj.id === img1)
    setImage1(searchImg[0]?.source_url)
    const searchImg2: any = images.filter((obj: any) => obj.id === Number(img2))
    setImage2(searchImg2[0]?.source_url)
  }, [images, img1, img2])

  const closePopup = (val: boolean) => {
    setOpenPopup(val)
  } 
 
  return (
    <>
      <div className={classes.product_Box} onClick={()=>setOpenPopup(true)}>
        <img src={image1} alt=""className={classes.main_img} />
        <p className={classes.title}>{title}</p>
        {/* <div className={classes.description}>{description}</div> */}
        <div className={classes.product_props}>
          <span className={classes.props}>{props}</span>
          <span className={classes.price}>{price} грн</span>
        </div>
      </div>
      {openPopup && <Popup id={id} img={image2} title={title} description={description} price={price} closePopup={closePopup} />}
      
    </>
    
  )
}
export default Product;