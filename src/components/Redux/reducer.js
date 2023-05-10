

const initialState = {
    myFavorites: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'addFav':
            return {
              ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        case 'REMOVE_FAV':
            return{
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id!== action.payload)
            }
        default:
        return state
    }
}

export default reducer