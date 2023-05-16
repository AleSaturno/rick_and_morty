import style from './Card.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../Redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect} from 'react';




const Card = ( {id, name, status, species, gender, origin ,image, onClose, addFav , removeFav, myFavorites}) => {

   const [isFav , setIsfav] = useState(false);
   const handleFavorite = () =>{
      if(isFav === true){
         setIsfav(false);
         removeFav(id);
      }
      else if(isFav === false){
         setIsfav(true);
         addFav({id, name, status, species, gender, origin ,image, onClose});

      }


   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsfav(true);
         }
      });
   }, [myFavorites]);
   

   return (
      
      <div className= {style.container}>
         <button className={style.okay} onClick = {()=> onClose(id)}>X</button>
          {
            isFav ? (
               <button className={style.mg} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={style.mg} onClick={handleFavorite}>🤍</button>
            )
         }
           
         <img src= {image} alt='Fotito Rick' />
         <Link to={`/detail/${id}`}>
            <h2>Name: {name}</h2>
         </Link>
         <h2>Status : {status}</h2>
         <h2>Species : {species}</h2>
         <h2>Gender : {gender}</h2>
         <h2>Origin : {origin}</h2>
         
        
      </div>
   );
}






const mapDispatchToProps = (dispatch) => {
   return {
     addFav: (character) => {
       dispatch(addFav(character));
     },
     removeFav: (id) => {
       dispatch(removeFav(id));
     },
   };
 };

 const mapStateToProps = (state) =>{
   return{
       myFavorites: state.myFavorites
   }
}


export default connect(
   mapStateToProps,// me permite acceder al estado global
   mapDispatchToProps//me permite despachar acciones
)(Card);
