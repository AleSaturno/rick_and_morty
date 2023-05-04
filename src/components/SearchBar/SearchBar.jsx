import { useState } from 'react';
import style from './SearchBar.module.css'

const SearchBar = (props) => {

   const [id, setId] = useState('');
   const handleChange = (event) =>{
      setId(event.target.value);
   }

   return (
      <div className={style.container}>
         <input type='search' onChange = {handleChange} value={id} />
         <button onClick={() => props.onSearch(id)}>Agregar</button>
      </div>
   );
}

export default SearchBar;