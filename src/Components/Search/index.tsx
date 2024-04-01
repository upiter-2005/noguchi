import React, {useState} from 'react'
import classes from "./Search.module.scss"

 const Search: React.FC = () => {
  const[value, setValue] = useState('');

  return (
    <div className={classes.search}>
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} placeholder='Пошук...' />
    </div>
  )
}
export default Search;