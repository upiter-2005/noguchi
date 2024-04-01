import React from 'react'
import classes from './Categories.module.scss'
import {categories} from "../../utils/categories"
import {CatTile} from "../../Components"

const Categories: React.FC = () => {


  return (
    <div className={classes.cat_wrapper}>
     
        {categories.map((obj, i) => <CatTile title={obj.title} link={obj.link} img={obj.img} key={i}  />)}
    </div>
  )
}
export default Categories;