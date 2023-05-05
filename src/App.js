import './App.css';
import Cards from './components/Cards/Cards.jsx';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import axios from 'axios';
import {Routes, Route } from 'react-router-dom';
import About from './components/About/about.jsx';
import Detail from './components/Detail/Detail';


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

         <Routes>
            <Route path = "/home" element = {<Cards characters={characters} onClose = {onClose}/>} />
            <Route path = "/about" element = {<About/>} />
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>
         
         
      </div>
   );
}

export default App;