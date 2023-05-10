import { connect } from "react-redux";
import Card from "../Card/Card";





const Favorite = ({myFavorites}) => {

    return (
        <div>
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