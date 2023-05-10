import { ADD_FAV, REMOVE_FAV } from "./action-type"


export const addFav = (character) =>{
    return{
        type: ADD_FAV,
        payload: character
    }

}

export const removeFav = (character) =>{
    return{
        type: REMOVE_FAV,
        payload: character.id
    }
}

