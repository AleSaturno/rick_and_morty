myFavorites = [];

//Se creo un array vacío llamado myFavorites, cuyo array vacio se guardaran nuestras cartas que le demos en favoritos.



const postFav = (req , res) =>{
    const chareacter = req.body;

    myFavorites.push(chareacter);

    res.json(chareacter);
};

const deleteFav = (req , res) =>{
    const id = req.params.id;

    myFavorites = myFavorites.filter(character => character.id !== id);
    
    res.json(myFavorites);
};


module.exports = {
    postFav,
    deleteFav
}