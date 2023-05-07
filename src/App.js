import './App.css';
import Cards from './components/Cards/Cards.jsx';
import { useState , useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import axios from 'axios';
import {Routes, Route, useLocation , useNavigate } from 'react-router-dom';
import About from './components/About/about.jsx';
import Detail from './components/Detail/Detail';
import Form from './components/Formulario/Form';



function App() {

   const [access , setAccess] = useState(false)
   const navigate = useNavigate();
   const Email = 'admin@gmail.com';
   const Password = '123456';

   const login = (userData) =>{
      if(userData.password === Password && userData.email === Email){
         setAccess(true);
         navigate('/home');
      }

   }

   useEffect(() =>{
      !access && navigate('/');
   }, [access]);



   

   const Location = useLocation();   
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

         {
            Location.pathname !== '/'
            ? <NavBar onSearch = {onSearch}  />
            : null 
         }


         <Routes>
            <Route path='/' element = {<Form login ={login}/>}/>
            <Route path = "/home" element = {<Cards characters={characters} onClose = {onClose}/>} />
            <Route path = "/about" element = {<About/>} />
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>
         
         
      </div>
   );
}

export default App;