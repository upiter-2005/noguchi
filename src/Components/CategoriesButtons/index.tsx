import React from 'react'
import classes from './CategoriesButtons.module.scss'
import {useNavigate} from "react-router-dom"
import { categories } from "../../utils/categories"

type CategoryButtonProps = {
  activeCat: string,
  onClickCategory: (cat: string) => void
}
const CategoriesButtons: React.FC<CategoryButtonProps> = ({ activeCat, onClickCategory }) => {
  const navigate = useNavigate()

  console.log(activeCat);


  const categoryHandle = (cat: string) => {
    navigate(`/category/${cat}`)
    onClickCategory(cat)

  }

  return (
    <div className={classes.filter_wrap}>
      {categories.map((obj, i) => <button title={obj.title} id={obj.link} key={i} className={activeCat === obj.link ? `${classes.activeCat}` : ''} onClick={()=> categoryHandle(obj.link)}> {obj.title}</button>)}
    </div>
  )
}
export default CategoriesButtons;