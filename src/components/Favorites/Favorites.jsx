import { connect } from "react-redux";
import Card from "../Card/Card";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { filterCards, orderCards } from "../Redux/actions";
import style from './Favorite.module.css'

const Favorite = ({myFavorites}) => {

    const [aux , setAux] = useState(false);




    const dispatch = useDispatch();

    const handleOrder = (event) =>{
        dispatch(orderCards(event.target.value));
        setAux(!aux);
    };

    const handleFilter = (event) =>{
        dispatch(filterCards(event.target.value))
    }






    return (
        <div className={style.contenedor}>
            <select className={style.seleccion} onChange={handleOrder}>
                <option  value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select className={style.seleccion}  onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>


            {myFavorites.map((character) => (
            <Card
            id={character.id}
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}
            onClose={character.onClose}
            /> 
            ))}
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        myFavorites: state.myFavorites
    }
}



export default connect(
    mapStateToProps,
    null
)(Favorite);