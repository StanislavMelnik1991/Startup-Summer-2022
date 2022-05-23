
import { AppActionsType, AppThunkType } from "./store";
import {getUser} from './userReducer';
import {getRepos} from './repositoriesReducer';


type AppReducerType = typeof inintialState

const inintialState = {
    status: 'idle' as 'idle'| 'success',
}

export const appReducer = (state = inintialState, action: AppActionsType): AppReducerType => {
    switch (action.type){
        case 'APP/SET_SUCCESS': 
        return {
            ...state, status: 'success'
        }
       
        default : {
            return state
        }
    }
}

export const setSuccess = () => ({ type: 'APP/SET_SUCCESS' } as const)


export const getData = (login: string): AppThunkType => async (dispatch) => {
   await dispatch(getUser(login))
   await dispatch(getRepos(login))
}