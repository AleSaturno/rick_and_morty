import './App.css';
import Cards from './components/Cards/Cards.jsx';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import axios from 'axios';


function App() {
   const [characters,setCharacters] = useState([]);
   const [requestedIds, setRequestedIds] = useState([]);
   
   const onSearch = (id) => {
      if (requestedIds.includes(id)) {
         window.alert('¡Este ID ya fue solicitado!');
      } else {
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
               setRequestedIds((oldIds) => [...oldIds, id]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      }
   }
   const onClose = (id) =>{
      const charactersFiltered = characters.filter(character => character.id !== parseInt(id))
      setCharacters(charactersFiltered) 
   };


   return (
      <div className='App'>
         <NavBar onSearch = {onSearch} />
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
         <Cards characters={characters} onClose = {onClose}/>
      </div>
   );
}

export default App;