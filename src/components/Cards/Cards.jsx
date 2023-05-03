import style from './Cards.module.css'
import Card from '../Card/Card';

const Cards = (props) => {
  const {characters} = props
   return(
      <div className= {style.contenedor}>
         {characters.map((item) => 
            <Card key ={item.id} name={item.name} status={item.status} species={item.species} gender={item.gender} origin={item.origin.name} image={item.image} onClose={() => alert('Emulamos que se cierra la Card')} />
         )}
      </div>
   )   
}

export default Cards