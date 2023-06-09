import { useState } from 'react';
import style from './SearchBar.module.css'

const SearchBar = (props) => {

   const [id, setId] = useState('');
   const handleChange = (event) =>{
      setId(event.target.value);
      setTimeout(() => {
         setId('');
       }, 1500);
   }

   return (
      <div className={style.container}>
         <input type='search' onChange = {handleChange} placeholder='Ingrese un id de 1 a 830' value={id} />
         <button onClick={() => props.onSearch(id)}>Agregar</button>
      </div>
   );
}

export default SearchBar;