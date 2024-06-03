import React, { useEffect, useState } from 'react'
import classes from './Category.module.scss'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../redux/store'
import { selectProducts, fetchProducts, fetchProductsImages } from "../../redux/slices/productsSlice"
import { CategoriesButtons, Product, Skeleton } from '../../Components'


const Category: React.FC = () => {
  const [products, setProducts] = useState([])
  const [activeCat, setActiveCat] = useState<string>('')
  const dispatch = useAppDispatch();
  const { id } = useParams() as any
  const { items, status } = useSelector(selectProducts)


  useEffect(() => {
    if (items.length < 1) {
      dispatch(fetchProducts())
      dispatch(fetchProductsImages())
    } else {
      const filterResult = items.filter((obj: any) => obj.acf.category[0] === id)
      setProducts(filterResult);

    }

  }, [items, dispatch]);

  useEffect(() => {
    setActiveCat(id)
  }, [])


  const onClickCategory = (cat: string) => {
    setActiveCat(cat)
    const filterResult = items.filter((obj: any) => obj.acf.category[0] === cat)
    setProducts(filterResult)
    console.log(filterResult)
  }
  const skeleton = [...new Array(6)].map((item, i) => <Skeleton key={i} />)

  const list = products?.map((obj: any) => <Product
    key={obj.id}
    id={obj.id}
    img1={obj.acf.image_1}
    img2={obj.acf.image_2}
    title={obj.title.rendered}
    description={obj.acf.description}
    props={obj.acf.property}
    price={obj.acf.price}
  />)
  return (
    <div className={classes.category_page}>
      <CategoriesButtons activeCat={activeCat} onClickCategory={onClickCategory} />
      <div className={classes.category_page_products}>
        {status === 'loading' ? skeleton : list}
      </div>
    </div>
  )
}
export default Category;