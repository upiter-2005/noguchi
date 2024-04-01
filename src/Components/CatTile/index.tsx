import React from 'react'
import { Link } from "react-router-dom"
import classes from "./CatTile.module.scss"

type CatsProps = {
  title: string,
  link: string,
  img?: string
}

const CatTile: React.FC<CatsProps> = ({ title, link, img }) => {
  return (
    <Link to={`/category/${link}`} className={classes.tile}>
      <img src={img} alt="" className={classes.imgTile} />
      <p className={classes.title}>{title}</p>
    </Link>
  )
}
export default CatTile;