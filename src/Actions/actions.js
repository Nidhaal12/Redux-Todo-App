import { ADD_TODO } from './types'
import {DELETE_BTN} from'./types'
import {COMPLETE_BTN} from './types'
import {EDIT_BTN} from './types'

export const AddBtn = newTodo => {
    return {
        type: ADD_TODO,
        payload: newTodo
    }

}
export const Delete = deletedid =>{
    return{
        type :DELETE_BTN,
        payload: deletedid
    }
}
export const Complete = completed =>{
    return {
        type : COMPLETE_BTN,
        payload : completed
    }
}
export const Edit = updatedTodo =>{
    return{
        type : EDIT_BTN,
        payload : updatedTodo // updatedTodo houwa l objet (el todo eli badalneha) eli bech na3tih parametre ki n3ayet lel fonction hedhi
    }
}