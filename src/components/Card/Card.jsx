import style from './Card.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { addFav } from '../Redux/actions';
import { removeFav } from '../Redux/actions';
import { connect } from 'react-redux';
import { useState} from 'react';



const Card = ( {id, name, status, species, gender, origin ,image, onClose}) => {

   const [isFav , setIsfav] = useState(false);
   const handleFavorite = () =>{
      if(isFav === true){
         setIsfav(false);
         removeFav(id);
      }
      else if(isFav === false){
         setIsfav(true);
         addFav(id);

      }


   }

   

   return (
      
      <div className= {style.container}>
         <img src= {image} alt='Fotito Rick' />
         <Link to={`/detail/${id}`}>
            <h2>Name: {name}</h2>
         </Link>
         <h2>Status : {status}</h2>
         <h2>Species : {species}</h2>
         <h2>Gender : {gender}</h2>
         <h2>Origin : {origin}</h2>
         <button onClick = {()=> onClose(id)}>X</button>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }  
      </div>
   );
}


const mapStateToProps = (state) =>{
   return{
      myfavorite: state.myfavorite
   }
}



const mapDispatchToProps = (dispatch) => {
   return {
     addFav: (id) => {
       dispatch(addFav(id));
     },
     removeFav: (id) => {
       dispatch(removeFav(id));
     },
   };
 };



export default connect(
   mapDispatchToProps,// me permite acceder al estado global
   mapDispatchToProps//me permite despachar acciones
)(Card);
