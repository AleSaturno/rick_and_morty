import style from './Card.module.css';

const Card = (props) => {
   return (
      
      <div className= {style.container}>
         <img src={props.image} alt='Fotito Rick' />
         <h2>Name: {props.name}</h2>
         <h2>Status : {props.status}</h2>
         <h2>Species : {props.species}</h2>
         <h2>Gender : {props.gender}</h2>
         <h2>Origin : {props.origin}</h2>
         <button onClick = {props.onClose}>X</button>
      </div>
   );
}
export default Card
