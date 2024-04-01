import React from 'react'
import classes from "./Home.module.scss"

import {Categories} from '../../Components'

const Home: React.FC = () => {

  return (
    <div className={classes.home}>
      <h1>Категории</h1>
      <Categories />

      <div className={classes.seo}>
        <p>Lorem ipsum dom dolor, sit amet consectetur adipisicing elit. Esse quas cumque vero quis laboriosam in? Fuga libero rem veritatis eius minima, nobis nam voluptatem unde voluptates quia molestiae reprehenderit deleniti!lor, sit amet consectetur adipisicing elit. Esse quas cumque vero quis laboriosam in? Fuga libero rem veritatis eius minima, nobis nam voluptatem unde voluptates quia molestiae reprehenderit deleniti!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quas cumque vero quis laboriosam in? Fuga libero rem veritatis eius minima, nobis nam voluptatem unde voluptates quia molestiae reprehenderit deleniti!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quas cumque vero quis laboriosam in? Fuga libero rem veritatis eius minima, nobis nam m dolor, sit amet consectetur adipisicing elit. Esse quas cumque vero quis laboriosam in? Fuga libero rem veritatis eius minima, nobis nam voluptatem unde voluptates quia molestiae reprehenderit deleniti! unde voluptates quia molestiae reprehenderit deleniti!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quas cumque vero quis laboriosam in? Fuga libero rem veritatis eius minima, nobis nam voluptatem unde voluptates quia molestiae reprehenderit deleniti!</p>
      </div>
    </div>
  )
}
export default Home;